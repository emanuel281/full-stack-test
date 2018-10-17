import connexion
from backend_server.models.error import Error  # noqa: E501
from backend_server.lib.group import Group
from backend_server.lib.user import User
from backend_server.conf.config import Session


def get_users_by_group_id(group_id):  # noqa: E501
    """Get users by group id

     # noqa: E501

    :param group_id: group id
    :type group_id: int

    :rtype: List[User]
    """
    session = Session()
    users = []
    for user, group in session.query(User, Group)\
            .filter(User.group_id == Group.id).\
            filter(Group.id == group_id).all():

        users.append(user.to_dict())
    return users


def get_groups():
    """Get groups

    # noga: E501

    :return: List[Group]
    """

    session = Session()
    groups = session.query(Group).all()
    for i in range(len(groups)):
        groups[i] = groups[i].to_dict()

    return groups


def add_group():
    """Add new group

    #noga: E501

    :rtype: dict(code, message)
    """

    if connexion.request.is_json:
        session = Session()
        group = Group.from_dict(connexion.request.get_json())  # noqa: E501
        new_group = Group(name=group.name)
        session.add(new_group)
        session.commit()
        return dict(code=201, message='Group created')

    return Error(code=400, message='Bad Request')

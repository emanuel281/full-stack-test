import connexion
from backend_server.models.error import Error  # noqa: E501
from backend_server.lib.user import User
from backend_server.conf.config import Session

import logging
logger = logging.getLogger(__name__)


def add_user():  # noqa: E501
    """Add new user

    :rtype: DefaultResponse
    """
    if connexion.request.is_json:
        session = Session()
        user = User.from_dict(connexion.request.get_json())  # noqa: E501
        print(user)
        new_user = User(name=user.name, username=user.username, password=user.password, group_id=user.group_id)
        session.add(new_user)
        session.commit()
        return dict(code=201, message='User created')
    return Error(code=400, message='Bad Request')


def delete_user_by_id(user_id):  # noqa: E501
    """Get user by id

     # noqa: E501

    :param user_id: user id
    :type user_id: int

    :rtype: DefaultResponse
    """

    # TODO: Fix this delete, it's not working
    session = Session()
    res = session.delete()
    print(res)
    # print(User.from_dict(res))
    return {
        'code': 201,
        'message': 'User deleted!'
    }


def get_user_by_id(user_id):  # noqa: E501
    """Get user by id

     # noqa: E501

    :param user_id: user id
    :type user_id: int

    :rtype: User
    """

    session = Session()
    user = session.query(User).filter(User.id == user_id).first()

    if user:
        return user.to_dict()
    return {
        'code': 404,
        'message': 'Not found!'
    }


def update_user(user_id):  # noqa: E501
    """update user

    :param user_id: user id
    :type user_id: int

    :rtype: DefaultResponse
    """
    if connexion.request.is_json:
        user = connexion.request.get_json()  # noqa: E501
        session = Session()
        session.query(User).filter(User.id == user_id). \
            update(user, synchronize_session=False)
        session.commit()
        return get_user_by_id(user_id)

    return {
        'code': 400,
        'message': 'Could not update user!'
    }


def get_users():  # noqa: E501
    """Get user list

    :rtype: List[User]
    """
    session = Session()
    users = session.query(User).all()
    for i in range(len(users)):
        users[i] = users[i].to_dict()

    return users

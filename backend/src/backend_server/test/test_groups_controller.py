# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.error import Error  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.test import BaseTestCase


class TestGroupsController(BaseTestCase):
    """GroupsController integration test stubs"""

    def test_get_users_by_group_id(self):
        """Test case for get_users_by_group_id

        Get users by group id
        """
        response = self.client.open(
            '//groups/{group_id}/users'.format(group_id=56),
            method='GET',
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()

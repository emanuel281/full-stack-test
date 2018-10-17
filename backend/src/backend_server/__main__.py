#!/usr/bin/env python3

import connexion

from backend_server import encoder
from backend_server.conf import config


def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Swagger Manage Users'})

    config.configure()  # NOTE: create tables

    app.run(port=8080)


if __name__ == '__main__':
    main()

from backend_server.lib.base__ import Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///gc.db:memory', echo=True)
Session = sessionmaker(bind=engine)


def configure():
    Base.metadata.create_all(engine, checkfirst=True)
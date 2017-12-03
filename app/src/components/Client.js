import React from 'react';

const Client = (props) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Avatar" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{`${props.lastName} ${props.firstName} ${props.patronymic}`}</p>
              <p className="subtitle is-6">{props.city}, {props.email}</p>
            </div>
          </div>

          <div className="content">
            Подключено объектов: <a>{props.contracts.length}</a>.
            <br />
            {props.notes &&
              <small>Доп.заметки: {props.notes}</small>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;

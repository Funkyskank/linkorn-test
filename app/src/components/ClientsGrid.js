import React, { Component } from 'react';
import { connect } from 'react-redux'
import Client from './Client';

class ClientsGrid extends Component {

  render = () => {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Clients
              </h1>
              <h2 className="subtitle">
                Page with grid
              </h2>
            </div>
          </div>
        </section>

        <div className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.props.clients.map(client =>
                <Client
                  key={client.id}
                  {...client}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
	return {
		// You can now say this.props.clients
		clients: state.clients
	}
};

export default connect(mapStateToProps)(ClientsGrid);

import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="row">
                <div className="col-12">
                    <p className="text-muted credit">
                        All images are from <a href="https://commons.wikimedia.org/wiki/">Wikimedia Common</a>.
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;

import { useEffect, render, Component } from "react";

export class HubspotForm extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '20789954',
                    formId: 'a8355c52-9a53-4fe9-8ec0-a62e2c397bcd',
                    target: '#hubspotForm',
                });
            }
        });
    }

    render() {
        return (
            <div id="hubspotForm"></div>
        )
    }
}

export default HubspotForm
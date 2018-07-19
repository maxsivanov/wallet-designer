import React from 'react';
import '../css/WalletDesigner.less';

class WalletDesigner extends React.Component {
    render() {
        return this.props.side ? this.renderBack() : this.renderFront();
    }
    getDivStyle() {
        const divStyle = {};
        const def = this.props.definition;
        if (def.backgroundColor) {
            divStyle.backgroundColor = def.backgroundColor;
        }
        if (def.foregroundColor) {
            divStyle.color = def.foregroundColor;
        }
        return divStyle;
    }
    renderFront() {
        const def = this.props.definition;
        const divStyle = this.getDivStyle();
        const labelStyle = {};
        if (def.labelColor) {
            labelStyle.color = def.labelColor;
        }
        return (
            <div className="WalletDesigner" style={divStyle}>
                {def.logo &&
                    <div className={`Logo ${def.logoText?'LogoPlusText':'LogoAlone'}`}>
                        <img src="logo.png"/>
                    </div>
                }
                {def.logoText &&
                    <div className={`LogoText ${def.logoText?'LogoPlusText':'LogoAlone'}`}>
                        {def.logoText}
                    </div>
                }
                {def.hdr && def.hdr[0] &&
                    <div className="Header">
                        <label style={labelStyle}>{def.hdr[0].descr}</label>
                        <div>{def.hdr[0].value}</div>
                    </div>
                }
                {def.strip &&
                    <div className="Strip">
                        <img src="strip.png"/>
                    </div>
                }
                {def.sec && def.sec[0] &&
                    <div className={`Secondary Secondary0 ${!!def.strip && "HasStrip"}`}>
                        <label style={labelStyle}>{def.sec[0].descr}</label>
                        <div>{def.sec[0].value}</div>
                    </div>
                }
                {def.sec && def.sec[1] &&
                    <div className={`Secondary Secondary1 ${!!def.strip && "HasStrip"}`}>
                        <label style={labelStyle}>{def.sec[1].descr}</label>
                        <div>{def.sec[1].value}</div>
                    </div>
                }
                <div className="Barcode">
                    <div className="Barcode__number">{this.props.number}</div>
                </div>
            </div>
        );
    }
    renderBack() {
        const divStyle = this.getDivStyle();
        const def = this.props.definition;
        return (
            <div className="WalletDesigner" style={divStyle}>
                <div className="BackBox">
                    {def.back.map(item => (
                        <div className="Back" key={item.key}>
                            <label>{item.descr}</label>
                            <div>{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export { WalletDesigner };

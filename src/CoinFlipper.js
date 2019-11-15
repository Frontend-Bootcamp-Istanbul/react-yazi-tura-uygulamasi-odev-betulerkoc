import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        toplamsayi: 0,
        tura:0
    }
  }


  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({donuyor: true});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);
    this.setState({toplamsayi: this.state.toplamsayi + 1});
    let newSide = Math.floor(Math.random() >= 0.5) == 1 ? "yazi" : "tura";
    this.setState({side: newSide});   
    this.setState({tura: newSide == "tura" ? this.state.tura + 1 : this.state.tura}); 
  };

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <p>
            Toplam
            <strong> {this.state.toplamsayi} </strong>
            atıştan
            <strong> {this.state.tura} </strong>
            ü tura
            <strong> {this.state.toplamsayi - this.state.tura} </strong>
            si yazı geldi.</p>
      </div>
    )
  }
}

export default CoinFlipper;
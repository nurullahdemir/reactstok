import React, { Component } from 'react'

class List extends Component {
    state = {
        yeniStokAdi:"",
        yeniMiktar:"",
        yeniBirimFiyat:"",
        toplamTutar:0,

         siparisListesi : [{
            stokAdi:'Buzdolabı',
            miktar:5,
            birimFiyat:100
        },
        {
            stokAdi:'Çamaşır Makinası',
            miktar:2,
            birimFiyat:80
        },{
            stokAdi:'Televizyon',
            miktar:1,
            birimFiyat:150
        }]
    }

    getToplamTutar(){
        var toplam=0;
        this.state.siparisListesi.forEach(element => {
            toplam+=element.miktar*element.birimFiyat;
        });
      return (toplam);
    }



    siparisEkle = (e) => {

//validation eklenmedi

        e.preventDefault();

      const {yeniMiktar,yeniBirimFiyat,yeniStokAdi,siparisListesi}=this.state;

      const yeniSiparis={
        stokAdi:yeniStokAdi,
        miktar:yeniMiktar,
        birimFiyat:yeniBirimFiyat
      }

      siparisListesi.push(yeniSiparis)

      this.setState({
           siparisListesi: siparisListesi,
           yeniMiktar:"",
           yeniBirimFiyat:"",
           yeniStokAdi:""
      });
    }

    changeInput= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {

       const {siparisListesi,yeniBirimFiyat,yeniMiktar,yeniStokAdi}= this.state

        return (
        <div>
            <div className="container">

               <div className="row">
                    <div style={{color:"red",fontSize:"20px",textAlign:"left",fontWeight:"bold"}} className="col-sm ml-4">
                        Sipariş Ekle
                    </div>
                </div>

                <div className="card-body">
                    <form onSubmit = {this.siparisEkle}>

                        <div className="form-group">
                            <div className="form-row  mb-4">
                                <div className="col">
                                <input type="text" placeholder="Stok Adı" name="yeniStokAdi" onChange={this.changeInput} value={yeniStokAdi} className="form-control"  aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                </input>
                            </div>
                        </div>

                        <div className="form-row mb-4">
                            <div className="col">
                                <input type="text" value={yeniMiktar} name="yeniMiktar" onChange={this.changeInput} placeholder="Miktar" className="form-control"  aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                </input>
                            </div>
                        </div>

                        <div className="form-row mb-4">
                            <div className="col">
                                <input type="text" placeholder="Fiyat" value={yeniBirimFiyat} onChange={this.changeInput} name="yeniBirimFiyat" className="form-control"  aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                </input>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row justify-content-md-end pr-2">
                                <div className="row">
                                    <div className="form-row mb-4 mr-4">
                                        <div className=" row justify-content-end">
                                        <button  className="btn btn-outline-secondary" type="submit">Ekle</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                    <hr></hr>

                <div className="row">
                    <div style={{color:"red",fontSize:"20px",textAlign:"left",fontWeight:"bold"}} className="col-sm">
                        Sipariş Listesi
                    </div>
                </div>

                <div className="row">
                    <div style={{color:"black",fontSize:"20px",textAlign:"left",fontWeight:"bold"}} className="col-sm">
                        Stok Adı
                    </div>
                    <div style={{color:"black",fontSize:"20px",textAlign:"center",fontWeight:"bold"}} className="col-sm">
                        Miktarı
                    </div>
                    <div style={{color:"black",fontSize:"20px",textAlign:"right",fontWeight:"bold"}} className="col-sm">
                        Fiyatı
                    </div>
                    <div style={{color:"black",fontSize:"20px",textAlign:"right",fontWeight:"bold"}} className="col-sm">
                        Tutar
                    </div>
                 </div>

            </div>

            <hr/>

            {siparisListesi.map(urun =>{
                return (
                <div key={urun.stokAdi} className="container">
                    <div className="row">
                        <div style={{color:"black",textAlign:"left"}} className="col-sm">
                            {urun.stokAdi}
                        </div>
                        <div style={{color:"black",textAlign:"center"}} className="col-sm">
                            {urun.miktar}
                        </div>
                        <div style={{color:"black",textAlign:"right"}} className="col-sm">
                            {urun.birimFiyat}
                        </div>
                        <div style={{color:"black",textAlign:"right"}} className="col-sm">
                            {urun.birimFiyat * urun.miktar }
                        </div>
                    </div>
                </div>
                )
            })}

            <hr/>
                <div  className="container">
                    <div className="row">
                    <div style={{color:"black",textAlign:"left"}} className="col-sm">
                   &nbsp;
                    </div>
                    <div style={{color:"black",textAlign:"center"}} className="col-sm">
                    &nbsp;
                    </div>
                    <div style={{color:"black",textAlign:"right"}} className="col-sm">
                    Toplam Tutar:
                    </div>
                    <div style={{color:"black",textAlign:"right"}} className="col-sm">
                  {this.getToplamTutar()}
                    </div>
                    </div>
            </div>
        </div>
        )
    }
}

 export default List;
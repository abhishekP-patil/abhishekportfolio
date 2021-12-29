import React from 'react';
import '../css/home-page.css';

function HomePage() {
  return (
    <div style={{width: '100%',height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{width: '100%', maxWidth: '1440px', height: '100%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{marginTop: '10%', width: '100%', height: '600px', display:'block', justifyContent: 'space-between', alignItems: 'center'}}>
                <img src={process.env.PUBLIC_URL + '/assets/images/ezgif-2-4200ec037a.gif'} alt="hello" style={{marginLeft: '5%',width: '80%', height: 'auto'}}/>
                <div style={{marginTop: '40px',width: 'auto', height: 'auto', display:'block'}}>
                    <div className="heading-div">
                        I'm&nbsp;
                        <span><span style={{color:'#5A00ED'}}> A</span>
                        bhishek&nbsp;</span>
                        <span><span style={{color:'#5A00ED'}}> P</span>
                        atil</span>
                    </div>
                    <div className="text-div" style={{fontSize: '40px'}}>
                        A&nbsp;
                        <span style={{color:'#5A00ED'}}>developer</span>
                        , a&nbsp;
                        <span style={{color:'#5A00ED'}}>designer</span>
                        &nbsp;and a&nbsp;
                        <span style={{color:'#5A00ED'}}>linguist</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
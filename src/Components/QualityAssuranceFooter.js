import * as React from 'react';
import img1 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/QualityAssuranceImages/madeInIndia.png";
import img2 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/QualityAssuranceImages/assuredQuality.png";
import img3 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/QualityAssuranceImages/securePayments.png";
import img4 from "/Users/tnluser/Desktop/development/VM-Couture-UI/src/assets/QualityAssuranceImages/empoweringWeavers.png";

function QualityAssuranceFooter() {

  return (
    <div class="QualityAssuranceFooterClass" style={{padding:'25px'}}>
      <div>
        <div>
          <div class="QualityAssuranceFooterElement QualityAssuranceFooterSlider" style={{paddingTop:'15px'}}>
            <div class="QualityAssuranceFooterItem QualityAssuranceFooterElement">
              <div>
                <div>
                  <img style={{marginTop:'6px'}} src={img1} alt="icon" loading="lazy" />
                </div>
                <h5 class="QualityAssuranceFooterText"> MADE IN INDIA</h5>
              </div>
            </div>
            <div class="QualityAssuranceFooterItem QualityAssuranceFooterElement">
              <div>
                <div class="claim-icon">
                  <img src={img2} alt="icon" loading="lazy" />
                </div>
                <h5 style={{marginTop:'10px'}} class="QualityAssuranceFooterText">ASSURED QUALITY</h5>
              </div>
            </div>
            <div class="QualityAssuranceFooterItem QualityAssuranceFooterElement">
              <div>
                <div class="claim-icon">
                  <img src={img3} alt="icon" loading="lazy" />
                </div>
                <h5 style={{marginTop:'10px'}} class="QualityAssuranceFooterText">SECURE PAYMENTS</h5>
              </div>
            </div>
            <div class="QualityAssuranceFooterItem QualityAssuranceFooterElement">
              <div>
                <div class="claim-icon">
                  <img style={{marginTop:'9px'}} src={img4} alt="icon" loading="lazy" />
                </div>
                <h5 style={{marginTop:'16px'}} class="QualityAssuranceFooterText">EMPOWERING WEAVERS</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default QualityAssuranceFooter;
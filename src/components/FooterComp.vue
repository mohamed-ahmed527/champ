<template>
  <div class="parent">
    <div class="container">
      <div class="p1">
        <div class="row">
          <div class="col-md-2 col-sm-12 col-xs-12">
            <span> Start a free account today </span>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="send">
              <input type="text" placeholder="Enter Your E-mail">
              <button> Continue </button>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div class="quest">
              <span> Question? Call us on 12 34 56 78 for help </span>
              <span> Easy setup - no payment fees - up to 100 products for free </span>
            </div>
          </div>
        </div>

      </div>

      <div class="p2">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" data-aos="fade-right" data-aos-duration="1000" >
            <div class="foot1">
              <h5>SELL ON CHAMB</h5>
              <span>Create account</span>
              <span> How it works suppliers </span>
              <span> Pricing </span>
              <span>FAQ for Suppliers</span>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1000">
            <div class="foot1">
              <h5>BUY ON CHAMB</h5>
              <span>Create account</span>
              <span> How it works suppliers </span>
              <span> Pricing </span>
              <span>FAQ for Suppliers</span>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" data-aos="fade-down" data-aos-duration="1000">
            <div class="foot1">
              <h5>COMPANY</h5>
              <span>Create account</span>
              <span> How it works suppliers </span>
              <span> Pricing </span>
              <span>FAQ for Suppliers</span>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1000">
            <div class="foot1">
              <h5>INDUSTRIES</h5>
              <span>Create account</span>
              <span> How it works suppliers </span>
              <span> Pricing </span>
              <span>FAQ for Suppliers</span>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" data-aos="fade-down" data-aos-duration="1000">
            <div class="foot1">
              <h5>SELL ON CHAMB</h5>
              <span>Create account</span>
              <span> How it works suppliers </span>
              <span> Pricing </span>
              <span>FAQ for Suppliers</span>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12" data-aos="fade-left" data-aos-duration="1000">
            <div class="foot1">
              <h5>SELL ON CHAMB</h5>
              <span>Create account</span>
              <span> How it works suppliers </span>
              <span> Pricing </span>
              <span>FAQ for Suppliers</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"parent"
}
</script>
<style lang="scss" scoped>
.parent{

  margin-top: 150px;
  background-image: url(../assets/images/footer_bg.png);
  padding: 50px 0px;
  .container{
    .p1{
      padding-bottom: 55px;
      border-bottom:1px solid #12345b;
      .row{
        display: flex;
        flex-wrap: wrap;
        >.col-md-2{
          span{
            display: block;
            color: white;
            font-size: 20px;
            font-family: system-ui;
            font-weight: 100;
            text-align: left;
          }
      }

      }
      .quest{
        display: block;
        span{
          color: white;
          font-size: 20px;
          font-family: system-ui;
          font-weight: 100;
          text-align: left;
          display: block;
          margin: 0px;
        }
        span:last-of-type{
          font-size: 14px;
        }
      }
      .send{
        position: relative;
        margin: 10px 0px;
        input{
          display: block;
          height: 45px;
          width: 100%;
          border-radius: 35px;
          border: 0px;
          padding: 3px 8px;
          padding-right: 129px;
          outline-style: none;
          color: grey;
          font-family: system-ui;   
        }
        button{
          position: absolute;
          right: 2px;
          top: 2.5px;
          border: 0px;
          border-radius: 30px;
          padding: 8px 34px;
          background-color: #1d99ff;
          color: white;
          font-size: 16px;
          font-family: sans-serif;        
          }
      }
    }
    .p2{
      margin-top: 50px;
    }
    .row{

      .col-lg-2{

        .foot1{
          text-align: left;
          margin: 13px 0px;
          h5{
            cursor: pointer;
            font-size: 15px;
            color: white;
            border-left: 5px solid #007dea;
            padding-left: 7px;
            font-weight: 600;
            font-family: monospace;
            letter-spacing: 1px;
          }
          span{
            cursor: pointer;
            display: block;
            margin: 7px 0px;
            color: #7b9bbf;
            font-size: 14px;
            font-family: -webkit-pictograph;
            &:hover{
              color: white;
            }
          }
        }
      }
    }

  }
}


</style>
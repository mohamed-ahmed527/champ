<template>
  <div class="parent">
    <nav>
      <div class="logo">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="form-group d-none d-md-block">
        <span> <i class="fas fa-search"></i> </span>
        <input placeholder="Search for products or companies" />
      </div>

      <div class="right-nav">
        <div class="right1">
          <span> How it works</span>
          <span> Champ for Business</span>
        </div>
        <div class="right2">
          <div class="right2-p1">
            <span>Change </span>
            <img src="../assets/images/flag.png" />
          </div>
          <div class="right2-p2">
            <img src="../assets/images/help-icon.png" />
            <span>Help</span>
          </div>
        </div>

        <div class="right3">
          <button class="btn">Login</button>
          <button class="btn sign">Sign up</button>
        </div>
      </div>

      <div class="form-group d-block d-md-none" style="width: 100%">
        <span> <i class="fas fa-search"></i> </span>
        <input placeholder="Search for products or companies" />
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "parent"
};
</script>
<style lang="scss" scoped>
$gray1: #636363;
$dark-blue: #09294c;
$dark-blue2: #051d36;
$light-blue: #337ab7;
$light-blue2: #1d99ff;
$blue-hover: #007dea;
$white: #fff;
input {
  outline-style: none;
}
nav {
  padding: 10px 0px;
  overflow: hidden;
  .logo {
    display: inline-block;
    float: left;
    width: 10%;
    padding: 7px 0px;

    img {
      width: 70%;
      display: block;
      margin: auto;
    }
  }
  .form-group {
    display: inline-block;
    float: left;
    width: 25%;
    border-left: 1px solid #ddd;
    padding-left: 20px;
    margin-bottom: 0px;
    height: 35px;
    span {
      font-size: 23px;
      color: $gray1;
      font-size: 19px;
    }
    input {
      margin: 0px;
      width: 89%;
      font-size: 15px;
      border: 0px;
      outline-style: none;
      color: #000;
      padding: 0px;
      height: 100%;
    }
  }
  .right-nav {
    display: inline-block;
    float: right;
    margin-right: 20px;
    color: $gray1;
    .right1 {
      display: inline-block;
      font-size: 16px;
      padding: 10px 10px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      span {
        cursor: pointer;
        &:hover {
          color: $light-blue;
        }
      }
      span:first-of-type {
        margin-right: 20px;
      }
    }
    .right2 {
      display: inline-block;
      padding: 0px 10px;
      border-right: 1px solid #ddd;
      .right2-p1 {
        display: inline-block;
        margin-right: 10px;
        span {
          margin-right: 5px;
          cursor: pointer;
          &:hover {
            color: $light-blue;
          }
        }
        img {
          cursor: pointer;
        }
      }
      .right2-p2 {
        display: inline-block;

        img {
          cursor: pointer;
          margin-right: 5px;
        }
        span {
          cursor: pointer;
          &:hover {
            color: $light-blue;
          }
        }
      }
    }
    .right3 {
      display: inline-block;
      button {
        padding: 8px 24px;
        cursor: pointer;
        outline-style: none;
        font-size: 14px;
      }
      button:first-of-type {
        background-color: transparent;
        &:hover {
          color: $light-blue;
        }
      }
      button:last-of-type {
        background-color: $dark-blue;
        color: white;
        &:hover {
          background-color: $light-blue;
        }
      }
    }
  }
}
@media (max-width: 1175px) {
  nav .right-nav .right1 {
    display: none;
  }
  nav .right-nav .right2 {
    display: none;
  }
}
@media (max-width: 750px) {
  nav .logo {
    display: block;
    float: none;
    width: 13%;
    margin-left: 7px;
    img {
      width: 100%;
    }
  }
  // nav .form-group {
  //   width: 57%;
  //   padding-left: 7px;
  //   margin-top: 5px;
  // }
  nav .right-nav {
    margin-top: -37px;
  }
}
// @media (min-width: 750px) and (max-width: 953px) {
//   nav .form-group {
//     width: 40%;
//   }
// }
</style>

<template>
  <div class="parent">
<!--------------start of header------------->
    <header>
        <div class="container">
            <h1>Find your next product or business partner here. </h1>
            <p>It has never been easier.</p>
            <div class="choose">
            <input placeholder="Search something ">
            <select>
                <option value>Textiles</option>
                <option value="1">Furniture</option>
                <option value="2">Leather</option>
            </select>
            <button class="btn"> Search </button>
            <p> <span> Or simply <a rel="#">click here</a> and get inspired! </span> </p>
            </div>
<!-----------start of products --------->            
        <div class="products">
          <div class="row">
            <div
              v-for="i in [1, 10, 11, 12, 13, 2, 4, 5]"
              :key="i"
              class="prod col-lg-3 col-md-4 col-sm-6 col-xs-12"
            >
              <p>Product</p>
              <img :src="require(`../assets/images/product/${i}.png`)" />
            </div>
          </div>
        </div>
<!-----------end of products --------->   
      </div>
    </header>
<!--------------end of header------------->
<!----------start of categories--------->
        <section class="categories">
            <h1> Browse all categorios here </h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xs-12" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
                        <div class="category1">
                            <div class="cat1_icon">
                                <img src="../assets/images/about-icon-1.png">
                            </div>
                            <h3> "Chamb" Your Business </h3>
                            <p>Grow easily with chamb. Create free account.We help expanding your business easily.</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-12" data-aos="fade-down" data-aos-duration="1000" data-aos-mirror="true">
                        <div class="category1">
                            <div class="cat1_icon">
                                <img src="../assets/images/about-icon-2.png">
                            </div>
                            <h3> Create and add </h3>
                            <p>Grow easily with chamb. Create free account.We help expanding your business easily.</p>
                        </div>
                    </div>

                    <div class="col-md-4 col-xs-12" data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">
                        <div class="category1">
                            <div class="cat1_icon">
                                <img src="../assets/images/about-icon-3.png">
                            </div>
                            <h3> Get inspired </h3>
                            <p>Grow easily with chamb. Create free account.We help expanding your business easily.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
<!----------end of categories--------->

<!-----------start of about----------->
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
                        <div class="explore">
                            <div class="explore-icon">
                                <img src="../assets/images/exciting_img-01.jpg">
                            </div>
                            <h3>Explore<span> exciting  </span> and exotic productstailored to you. </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12" data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">
                        <div class="list">
                            <div class="list-icon">
                                <img src="../assets/images/exciting_img-02.jpg">
                            </div>
                            <h3><span>List your products on </span> chamb and grow connections. </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<!-------------start of platfrom------------>
        <div class="platform">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12">
                        <div class="plat1">
                            <p>A platform built for scale & expansion. Start for free.</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <div class="plat2">
                            <p>Over the comming years, way thet business through the web works will change at agreat - and chamb is the gamebreaker.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
<!-------------end of platfrom------------>
<!----------------start of account------------->
        <section class="account">
            <div class="buyer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-xs-8" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
                            <div class="buyer_img">
                                <img src="../assets/images/creat_pro.png">
                            </div>    
                        </div>
                        <div class="col-md-6 col-xs-10" data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">
                            <div class="buyer_info">
                                <span>BUYER</span>
                                <h1>Empower your factory With a new lead Channel</h1>
                                <p>Never worry about sales or income ftom outbound channels. with chamb your store is directly connected to thousands of interested in your products.</p>
                                <div class="sub">
                                    <button class="col-md-5 col-xs-6"> Creat a buyer account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-xs-10" data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true">
                            <div class="buyer_img">
                                <img src="../assets/images/mac-about.png">
                            </div>    
                        </div>
                        <div class="col-md-6 col-xs-12" data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true">
                            <div class="buyer_info">
                                <span>SUPPLIER</span>
                                <h1>Grow your store
                                    With a new sales channel</h1>
                                <p>Never worry about sales or income ftom outbound channels. with chamb your store is directly connected to thousands of interested in your products.
                            </p>
                                <div class="sub">
                                    <button class="col-md-5 col-xs-6"> Creat a buyer account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
<!----------------end of account------------->
<!--------start of trend--------->
    <section class="trend">
        <h5>TRENDING PRODUCTS ON CHAMB</h5>
        <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
                <div class="trend1">
                    <div class="img_trend">
                        <img src="../assets/images/tr4.png" />
                    </div>
                    <div class="text_trend">
                        <div class="info">
                            <span> Wall Sticker </span>
                            <span> $1220 </span>
                            <p> By <span> Beko</span>  under <span> lights</span> </p>
                        </div>
                        <div class="action">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-star"></i></span><span>save to list</span>  </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-heart"></i></span><span>favourite it</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
                <div class="trend1">
                    <div class="img_trend">
                        <img src="../assets/images/tr3.png" />
                    </div>
                    <div class="text_trend">
                        <div class="info">
                            <span>Treehouse Bed </span>
                            <span> $1220 </span>
                            <p> By <span> Beko</span>  under <span> lights</span> </p>
                        </div>
                        <div class="action">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-star"></i></span><span>save to list</span>  </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-heart"></i></span><span>favourite it</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
                <div class="trend1">
                    <div class="img_trend">
                        <img src="../assets/images/tr1.png" />
                    </div>
                    <div class="text_trend">
                        <div class="info">
                            <span> Wall Sticker </span>
                            <span> $1220 </span>
                            <p> By <span> Beko</span>  under <span> lights</span> </p>
                        </div>
                        <div class="action">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-star"></i></span><span>save to list</span>  </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-heart"></i></span><span>favourite it</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
                <div class="trend1">
                    <div class="img_trend">
                        <img src="../assets/images/tr2.png" />
                    </div>
                    <div class="text_trend">
                        <div class="info">
                            <span> Treehouse Bed </span>
                            <span> $1220 </span>
                            <p> By <span> Beko</span>  under <span> lights</span> </p>
                        </div>
                        <div class="action">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-star"></i></span><span>save to list</span>  </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-heart"></i></span><span>favourite it</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
                <div class="trend1">
                    <div class="img_trend">
                        <img src="../assets/images/tr3.png" />
                    </div>
                    <div class="text_trend">
                        <div class="info">
                            <span> Treehouse Bed </span>
                            <span> $1220 </span>
                            <p> By <span> Beko</span>  under <span> lights</span> </p>
                        </div>
                        <div class="action">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-star"></i></span><span>save to list</span>  </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-heart"></i></span><span>favourite it</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 col-xs-12">
                <div class="trend1">
                    <div class="img_trend">
                        <img src="../assets/images/tr4.png" />
                    </div>
                    <div class="text_trend">
                        <div class="info">
                            <span> Wall Sticker </span>
                            <span> $1220 </span>
                            <p> By <span> Beko</span>  under <span> lights</span> </p>
                        </div>
                        <div class="action">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-star"></i></span><span>save to list</span>  </div>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <div class="action1"><span><i class="fas fa-heart"></i></span><span>favourite it</span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                                            
        </div>
    </section>
<!----------end of trend---------->
  </div>
</template>
<script>

export default {
  name:"parent",
}
</script>
<style lang="scss" scoped>
input{
    outline-style: none;
}
.container{
    width: 90%;
    margin: auto;
}

$gray1:#636363;
$dark-blue:#09294c;
$dark-blue2:#051d36;
$light-blue:#337ab7;
$light-blue2:#1d99ff;
$blue-hover:#007dea;
$white:#fff;

/****************************************/

/*****************end of nav***********************/
.b1{
    height: 40px;
    border: 0;
    background: none;
    color: white;
    border-bottom: 1px solid white;
    font-size: 20px;
    font-family: system-ui;
    margin-right: 10px;
}
/*************/
header{
    background-image: url(../assets/images/bg_main.png);
    padding-top: 80px;
    padding-bottom: 170px;
    margin-bottom: 100px;
    h1{
        text-align: center;
        color: white;
        width: 60%;
        margin: auto;
        font-size: 50px;
    }
    .container{
        >p{
            text-align: center;
            color: grey;
            font-size: 15px;
            margin-top: 13px;
            font-family: system-ui;
            font-weight: 100;
        }    

    }
    .choose{
        width: 50%;
        margin: 40px auto;
        input{
            @extend .b1;
            width: 50%;
        }
        select{
            @extend .b1;
        }
        button{
            height: 40px;
            padding: 0px 40px;
            background-color: $light-blue2;
            color: white;
            font-size: 20px;
            &:hover{
                background-color: $blue-hover;
                color: white;
            }
        }
        >p{
            font-size: 17px;
            margin-top: 20px;
            color: white;
            text-align: center;
            span{
                a{
                  text-decoration: none;
                }
            }
        }
    }
        .products{
        .row{
            display: flex;
            flex-wrap: wrap;
            margin: auto;
            .prod{
                background-color: $dark-blue2;
                transition: 0.5s all;
                cursor: pointer;
                transform: scale(0.9);
                border-bottom: 3px solid $blue-hover;
                padding: 10px 0px ;
                &:hover{
                    background-color: $blue-hover;
                    transform: scale(0.95);
                    border-bottom: 3px solid $blue-hover;
                }
                >p{
                    color: white;
                    text-align: center;
                    margin: 15 0px;
                    font-size: 25px;
                }
                img{
                    width: 100%;
                }
            }
        }
    }
}
/*******start of category**********/
.categories{
    clear: both;
    margin-top: -220px;
    margin-bottom: 0px;
    >h1{
        text-align: center;
        font-size: 24px;
        color: $white;
        margin-bottom: 50px;
    }
    .container{
        padding: 0;
        .row{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .col-md-4{
                .category1{
                    margin-bottom: 7px;
                    text-align: left;
                    padding: 50px 30px;
                    border-radius: 4px;
                    background-color: $white;
                    z-index: 100;
                    .cat1_icon{
                        width: 70px;
                        img{
                            display: block;
                            width: 100%;
                        }
                    }
                    h3{
                        font-size: 21px;
                        font-family: sans-serif;
                    }
                    p{
                        font-size: 14px;
                        font-weight: 400;
                        color: #607086;
                        line-height: 1.5;
                    }


                }
            }
        }
    }
}
/******************start of about*************/
.about{
    clear: both;
    background-color: aliceblue;
    padding-top: 450px;
    padding-bottom: 50px;
    margin-top: -231px;
    .container{
        padding: 0;
        .row{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .col-md-6:first-of-type{
               border-right: 1px solid #00000045;
               .explore{
                h3{
                    font-size: 27px;
                    width: 95%;
                    line-height: 1.3;
                    span{
                        font-weight: 700;
                        font-size: 30px;
                    }
                }
                p{
                    color: grey;
                    font-size: 15px;
                    font-family: system-ui;
                    line-height: 1.7;
                }
            }
        }
        .col-md-6{
            .list{
                h3{
                    font-size: 27px;
                    width: 95%;
                    line-height: 1.3;
                    span{
                        font-weight: 700;
                        font-size: 30px;
                    }
                }
                p{
                    color: grey;
                    font-size: 15px;
                    font-family: system-ui;
                    line-height: 1.7;
                }
            }
        }
      }
    }
}
/******************end of about*************/
/****************start of platform*********/
.platform{
clear: both;
margin-top: 100px;
margin-bottom: 40px;
    .container{
        padding: 0 110px;
        border-bottom: 1px solid #8080803d;
        padding-bottom: 30px;
        .row{
            .col-md-6:first-of-type{
                .plat1{
                >p{
                    color: $dark-blue;
                    font-size: 20px;
                    font-weight: 600;
                }
              }

            }
            .col-md-6:last-of-type{
                .plat2{ 
                >p{
                    color: #607087;
                    font-size: 16px;
                    line-height: 1.7;
                }
              }
            }
        }
    }
}
/****************end of platform*********/
/**********start of account************/
.account{
    margin-bottom: 100;
    .buyer{
        position: relative;
        overflow: hidden;
        padding-top: 120px;
        &::before{
            content: '';
            position: absolute;
            top: 0px;
            right: 0px;
            display: block;
            width: 50%;
            height: 100%;
            background-image: url(../assets/images/bg_img1.png);
            background-repeat: no-repeat;
            z-index: -1;
        }
        &::after{
            content: '';
            position: absolute;
            bottom: -346px;
            left: 0px;
            display: block;
            width: 80%;
            height: 100%;
            background-image: url(../assets/images/bg_img1.png);
            background-repeat: no-repeat;
            z-index: -1;
        }
        .container{
            padding-top: 30px;
            padding-bottom: 30px;
            margin-bottom: 70px;
            background-color: white;
            z-index: 10000;
            .row{
                .col-md-5{
                   .buyer_img{
                        img{
                            width: 100%;
                        }
                   }
                }
                .col-md-6{
                    .buyer_info{
                        color: $dark-blue;
                        overflow: hidden;
                        padding-top: 50px;
                        span{
                            font-size: 18px;
                            font-weight: 600;
                            font-family: monospace;
                        }
                        h1{
                            line-height: 1.5;
                        }
                        p{
                            color: grey;
                            line-height: 1.5;
                            font-family: system-ui;
                            font-size: 16px;
                            margin: 30 0;
                        }
                        .sub{
                            clear: both;
                            overflow: hidden;
                            button{
                                padding:0px 3px;
                                font-size: 15px;
                                font-family: sans-serif;
                                height: 45px;
                                border: 0px;
                                background-color: #06203c;
                                color: white;
                                display: block;
                                margin: auto;
                                margin-top: 5px;
                                max-width: 45%;
                            }
                        }
                    }
                }
            }
        }
        :last-of-type{
            .row{
                display: flex;
                direction: rtl;
                .col-md-6{

                    .buyer_info{
                        padding-left: 0px;
                        .sub{

                            button{
                                background-color:#1d99ff ;
                            }
                        }
                    }
                }
            }
        }

    }
}
/**********end of account************/
/**********start of trend************/
.trend{
    margin-top: 70px;
    margin-bottom: 100px;
    >h5{
        text-align: center;
        margin-bottom: 30px;
    }
    .row{
        margin-right: 0px;
        margin-left: 0px;
        >.col-lg-2{
            padding:0px 3px;
        }
        .trend1{
            padding: 10px;
            border: 1px solid #ddd;
            margin: 12px 0px;
            .img_trend{
                img{
                    width: 100% ;
                }
            }
            .text_trend{
            .info{
                overflow: hidden;
                >span:first-of-type{
                    float: left;
                    font-family: math;
                    font-weight: 600;
                    font-size: 17px;
                }
                >span:last-of-type{
                    float: right;
                    padding: 2px 7px;
                    border: 1px solid #ddd;
                    background: aliceblue;
                    margin-top: 5px;
                    font-size: 13px;
                    font-family: cursive;
                }
                p{
                    clear: both;
                    float: left;
                    color: grey;
                    margin: 0px;
                    margin-bottom: 4px;
                    font-size: 13px;
                    >span{
                        color: #2da0ff;
                    }
                }
            }
            .action{
                margin-top: 5px;
                text-align: center;
                .row{
                    display: flex;
                    flex-wrap: wrap;
                    >.col-md-6{
                        padding-left: 0px;
                        .action1{
                            font-size: 13px;
                            padding: 1px 4.2px;
                            color: grey;
                            background-color: #dddddd29;
                            border: 1px solid #ddd;
                            cursor: pointer;
                            margin: 3px 0px;
                            span:first-of-type{
                                margin-right: 7px;  
                                font-size: 11px;
                            }
                            span:last-of-type{

                            }
                        }
                    }
                }
            }
            }
        }

    }
}
/**********end of trend************/
@media (min-width:500px) and (max-width:1080px){
    header h1{
        width: 100%;
        font-size: 33px;
    }
    .platform .container{
        padding: 0px 50px;
    }
    .account .buyer .container .row .col-lg-6 .buyer_info{
        padding-left: 0px;
    }
}
@media (min-width:500px) and (max-width:1236px){
    header .choose{
        width: 100%;
    }
}
@media (max-width:768px) {
 header .choose button{
     display: block;
     margin: auto;
     margin-top: 15px;
     
 }   
}
@media (max-width:796px) {
    .about .container .row .col-md-6:first-of-type .explore h3 , .about .container .row .col-md-6 .list h3{
        width: 100%;
        font-size: 23px;
    }
    .about .container .row .col-md-6:first-of-type .explore h3 span, .about .container .row .col-md-6 .list h3 span{
        font-size: 26px;
    }
}
@media (max-width:768px) {
    .about .container .row .col-md-6:first-of-type{
        border-right: 0px;
    }
    .account .buyer .container .row .col-md-6 .buyer_info h1{
        font-size: 27px;
    }
}
</style>

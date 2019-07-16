<template>
  <div class="yaonuo-container">
    <div class="top">
      <div class="home-card-left">
        <div class="home-card-left-top">
          <div class="text-item">
            <span class="left">大码大码</span>
            <span class="ok">剩余500件</span>
          </div>
          <div class="text-item">
            <span class="left">大码</span>
            <span class="ok err">剩余50件</span>
          </div>
          <div class="text-item">
            <span class="left">大码</span>
            <span class="ok">剩余50件</span>
          </div>
          <div class="text-item">
            <span class="left">大码</span>
            <span class="ok">剩余50件</span>
          </div>
          <div class="text-item">
            <span class="left">大码</span>
            <span class="ok">剩余50件</span>
          </div>
        </div>
        <div class="home-card-left-bottom">
          <!--          <mu-button class="btn-full">点击领取衣物</mu-button>-->
          <mu-button class="btn-left-half">领取</mu-button>
          <mu-button class="btn-right-half">补衣</mu-button>
        </div>
      </div>
      <div class="home-card-right">
        <div class="home-card-right-l">
          <div class="home-card-right-l-top">
            <p class="home-card-right-l-top-title">某某洁柜名称</p>
            <p class="home-card-right-l-top-subtitle">首都医科大学附属医院</p>
          </div>
          <div class="home-card-right-l-bottom">
            <div class="item">
              <h3 class="title">归属科室</h3>
              <p class="desc">某某科室、某某科室\某某科室、某某科室某某科室、某某科室</p>
            </div>
            <div class="item">
              <h3 class="title">污柜类型</h3>
              <p class="desc">某某科室、某某科室某某科室、某某科室某某科室、某某科室</p>
            </div>
          </div>
        </div>
        <div class="home-card-right-r">
          <div class="home-card-right-r-t">
            <div class="top">
              <div class="icon fl">王</div>
              <div class="fl">
                <p class="title">王某某</p>
                <p class="subtitle">15701536183</p>
              </div>
            </div>
            <div class="bottom">
              <div class="item">
                <h3 class="title">权限范围</h3>
                <p class="desc">某某科室、某某科室\某某科室、某某科室某某科室、某某科室</p>
              </div>
            </div>
          </div>
          <div class="home-card-right-r-b">
            <mu-button class="btn">退出登录</mu-button>
          </div>
        </div>
      </div>
    </div>
    <div class="home-info">
      联系电话：18521033333
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
  .yaonuo-container {
    .top {
      padding: 1rem 0 0 .84rem;

      &::after {
        content: '';
        display: block;
        overflow: hidden;
        clear: both;
      }

      .home-card-left {
        float: left;
        box-sizing: border-box;
        width: 3.8rem;
        height: 4.4rem;
        background-color: white;
        border-radius: .1rem;
        margin-right: .73rem;
        padding: .35rem .15rem .17rem .35rem;

        .home-card-left-top {
          height: 2.9rem;
          overflow: auto;

          .text-item {
            font-size: .34rem;
            font-weight: 400;
            color: #264A94;

            &:not(:first-child) {
              margin-top: -0.1rem;
            }

            span.left {
              display: inline-block;
              width: 1.56rem;
              text-align: right;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            span.ok, span.err {
              display: inline-block;
              max-width: 1.23rem;
              margin-left: .3rem;
              margin-top: 0.08rem;
              font-size: .18rem;
              font-weight: 400;
              padding-bottom: .06rem;
              vertical-align: top;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            span.ok {
              color: rgba(91, 182, 71, 1);
              border-bottom: .03rem solid rgba(91, 182, 71, 1);
            }

            span.err {
              color: #F57C6C;
              border-bottom: .03rem solid #F57C6C;
            }
          }
        }

        .home-card-left-bottom {
          margin-top: .2rem;

          .btn-full {
            width: 3.10rem;
            height: .75rem;
            background: rgba(46, 182, 170, 1);
            border-radius: .43rem;
            font-size: .36rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }

          .btn-left-half, .btn-right-half {
            width: 1.55rem;
            height: .75rem;
            background: rgba(46, 182, 170, 1);
            border-radius: .43rem;
            font-size: .36rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }

          .btn-left-half {
            border-radius: .43rem 0 0 .43rem;
            margin-right: -0.02rem;
          }

          .btn-right-half {
            border-radius: 0 .43rem .43rem 0;
            margin-left: -0.02rem;
          }
        }
      }

      .home-card-right {
        float: left;
        box-sizing: border-box;
        width: 6.62rem;
        height: 4.4rem;

        &::after {
          content: '';
          display: block;
          overflow: hidden;
          clear: both;
        }

        .home-card-right-l {
          float: left;
          box-sizing: border-box;
          width: 3.2rem;
          height: 4.4rem;
          border-radius: .1rem;
          background-color: white;
          margin-right: .22rem;

          .home-card-right-l-top {
            box-sizing: border-box;
            height: 1.46rem;
            border-bottom: .02rem solid rgba(207, 234, 248, 1);
            padding: .3rem 0 0 .2rem;

            .home-card-right-l-top-title {
              font-size: .36rem;
              font-weight: 400;
              color: rgba(38, 74, 148, 1);
              margin-bottom: .06rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .home-card-right-l-top-subtitle {
              font-size: .24rem;
              font-weight: 400;
              color: rgba(52, 151, 206, 1);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          .home-card-right-l-bottom {
            padding: .29rem .3rem;

            .item {
              height: 1.2rem;
              overflow: hidden;
              margin-bottom: 0.1rem;

              .title {
                display: inline-block;
                box-sizing: border-box;
                padding: .01rem .11rem;
                background-color: #CFEAF8;
                font-size: .24rem;
                font-weight: 400;
                color: rgba(38, 74, 148, 1);
                margin-bottom: 0.05rem;
              }

              .desc {
                font-size: .24rem;
                font-weight: 400;
                color: rgba(38, 74, 148, 1);
                opacity: 0.7;
                height: .6rem;
              }
            }
          }
        }

        .home-card-right-r {
          float: left;
          width: 3.2rem;

          .home-card-right-r-t {
            box-sizing: border-box;
            width: 3.2rem;
            height: 3.33rem;
            background-color: white;
            border-radius: .1rem;
            margin-bottom: .22rem;

            .top {
              box-sizing: border-box;
              height: 1.46rem;
              border-bottom: .02rem solid rgba(207, 234, 248, 1);
              padding: .3rem 0 0 .2rem;

              .icon {
                width: .787rem;
                height: .787rem;
                border-radius: 50%;
                background-color: #264A94;
                font-size: .49rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                line-height: 0.787rem;
                margin-right: 0.19rem;
                margin-top: 0.08rem;
              }

              .fl {
                float: left;

                .title {
                  font-size: .36rem;
                  font-weight: 400;
                  color: rgba(38, 74, 148, 1);
                  margin-bottom: .06rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }

                .subtitle {
                  font-size: .24rem;
                  font-weight: 400;
                  color: rgba(52, 151, 206, 1);
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }

            .bottom {
              padding: .29rem .3rem;

              .item {
                height: 1.2rem;
                overflow: hidden;
                margin-bottom: 0.1rem;

                .title {
                  display: inline-block;
                  box-sizing: border-box;
                  padding: .01rem .11rem;
                  background-color: #CFEAF8;
                  font-size: .24rem;
                  font-weight: 400;
                  color: rgba(38, 74, 148, 1);
                  margin-bottom: 0.05rem;
                }

                .desc {
                  font-size: .24rem;
                  font-weight: 400;
                  color: rgba(38, 74, 148, 1);
                  opacity: 0.7;
                  height: .6rem;
                }
              }
            }
          }

          .home-card-right-r-b {
            .btn {
              display: block;
              width: 3.20rem;
              height: .85rem;
              line-height: .85rem;
              background-color: #F57C6C;
              border-radius: .43rem;
              text-align: center;
              font-size: .36rem;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }
    }

    .home-info {
      margin-top: .98rem;
      text-align: center;
      font-size: .20rem;
      font-weight: 300;
      color: rgba(215, 215, 215, 1);
      opacity: 0.8;
    }
  }
</style>

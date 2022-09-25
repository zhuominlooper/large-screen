<template>
  <section class="center">
    <div class="tag">
      <div class="tag-top">
        <ul>
          <li>345346</li>
          <li>67867</li>
        </ul>
      </div>
      <div class="tag-bottom">
         <ul>
          <li>等待中乘客</li>
          <li>起飞中乘客</li>
        </ul>
      </div>
    </div>
    <div class="map">
     <div class="map1"></div>
     <div class="map2"></div>
     <div class="map3"></div>
     <div class="map-chat"></div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.center {
  margin: 0 0.2rem;
  .tag {
    background: rgba(101, 132, 226, 0.1);
    padding: 0.1875rem;
    .tag-top {
      position: relative;
      border: 1px solid rgba(25, 186, 139, 0.17);
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 30px;
        height: 10px;
        border-top: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: '';
        width: 30px;
        height: 10px;
        border-right: 2px solid #02a6b5;
        border-bottom: 2px solid #02a6b5;
      }
      ul {
          list-style:none;
        display: flex;
        li {
          position: relative;
          flex: 1;
          line-height: 1rem;
          font-size: .5rem;
          color: #ffeb7b;
          text-align: center;
          font-family: 'electronicFont';
          &::after {
            content: '';
            position: absolute;
            top: 25%;
            right: 0;
            height: 50%;
            width: 1px;
          
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }
    .tag-bottom {
      ul {
        list-style:none;
        display: flex;
        li {
          flex: 1;
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: .3rem;
          height: 0.5rem;
          line-height: 0.5rem;
          padding-top: 0.125rem;
        }
      }
    }
  }
}
.map{
  position: relative;
  height: 8.2rem;
  .map1{
    width: 5.5rem;
    height: 5.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-image: url('../assets/map.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0.3;
  }
  .map2{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 7.5rem;
    width: 7.5rem;
    background-image: url('../assets/lbx.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation-name:rotate1 ;
    animation-duration: 15s;
   animation-iteration-count:infinite;
   animation-timing-function:linear;
   opacity: 0.6;
  }
  .map3{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 6rem;
    width:6rem;
    background-image: url('../assets/jt.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    animation-name:rotate2 ;
    animation-duration: 10s;
   animation-iteration-count:infinite;
   animation-timing-function:linear
  }
  .map-chat{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
   // background: #ffeb7b;
    height: 8rem;
  }

  @keyframes rotate1 {
  0%   {
      transform: translate(-50%,-50%)rotate(0deg);
    }
    100% {transform: translate(-50%,-50%)rotate(360deg);}
  }
    @keyframes rotate2 {
  0%   {
      transform: translate(-50%,-50%)rotate(0deg);
    }
    100% {transform: translate(-50%,-50%)rotate(-360deg);}
  }
}
</style>

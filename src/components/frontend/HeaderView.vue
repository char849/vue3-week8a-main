<template>
  <header class="position-relative mix-vh-100" data-aos="fade-up">
    <div class="bgImg banner justify-content-between align-items-center">
      <div
        class="position-absolute top-50 start-50 text-white text-center translate-middle"
      >
        <h1 class="fw-bold display-6" data-aos="fade-up">漢文手作模型</h1>
        <hr class="mb-1 mx-n3" data-aos="fade-up" />
        <p class="fw-bold" data-aos="fade-up">
          擅長寫實風格 生物 人物 製做 由3D建模搭配3D列印後 手修雕塑上色
        </p>
        <RouterLink
          to="/products"
          role="button"
          id="btn02"
          class="btn btn-light fw-bold px-4 my-4"
          data-aos="fade-up"
        >
          進來逛逛
        </RouterLink>
      </div>
      <button
        class="btn aboutBtn position-absolute fw-bold d-flex flex-column align-items-center text-white"
        data-aos="fade-up"
        type="button"
        @click="moveTo"
      >
        關於手作
        <span class="downFill" data-aos="fade-up">
          <i class="bi bi-caret-down-fill fs-5"></i>
        </span>
      </button>
    </div>
  </header>
  <div class="container px-3" id="intro">
    <div class="row mb-5 mt-4">
      <div class="col-12 col-md-6 mt-4" data-aos="fade-up">
        <img
          class="img-fluid mt-5 border rounded p-1"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647328485359.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ig8o%2BJ3zUjdxADcMFNMRbvCRCuQy4QXQ%2F9k98YA3dhzypsdV%2BvOFQZ00F9bUWRFk3aRP4Ef30mj2%2FeMqqZtVQGXqL1WuY3aSW70xA5ido7DYiVoxWO9Gcq5hoBgyAp110EMrYDUcGCLdR25GnALZKK3WZiCnxIgStePqcHP%2BHmSuph4Q0%2BOr6SG%2F6oX5wxc%2F%2FweYSxMz9Cp6c1bgnAIsGe9Ii8SadqrYFfiCKvSNSuFPmfVNkBNL0hk%2Bu6TO6uiiL14B1cWSFjTyKyl%2BMPnGmiXYvJQHnQxA4fFlIVWmYnn%2FcDRIiwbHUNUuKJSVMn%2Fc2HyNbZfdwKGnXOuw4zZF%2FA%3D%3D"
          alt="home-1"
        />
      </div>
      <div
        class="col-12 col-md-6 p-3 p-md-5 mt-3 d-flex justify-content-cente flex-column lh-lg"
        data-aos="fade-up"
      >
        <p class="h6 text-info fw-bold" data-aos="fade-up">
          3D 製作流程 <span class="material-icons"> add_photo_alternate </span>
        </p>
        <p class="h2 text-dark" data-aos="fade-up">
          照片收集、3D 設計稿模型製作
        </p>
        <p class="text-warning mt-2" data-aos="fade-up">
          依照客製需求照片，全部滙整起來，將各個角度照片準備好了開始繪製3D設計稿，及後續3D建模列印。
          列印出來的模型通常都是單色，依照列印材料原本的單色所產出就是什麼色。
        </p>
        <RouterLink
          to="/about"
          id="btn02"
          class="col-8 col-md-6 mt-5 fw-bold btn btn-outline-secondary"
          data-aos="fade-up"
        >
          關於漢文帝
        </RouterLink>
      </div>
    </div>
    <div class="row mb-2 flex-md-row-reverse" data-aos="fade-up">
      <div class="col-12 col-md-6">
        <img
          class="img-fluid bg-white border rounded p-1"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1647329876514.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SNdkVOv9f2rxUilCGl7G%2FYlASQvcopzLp%2Fw9Nli4GP6Zhww6PiGogxtluVIBr2zxj74pxkqo4Am0L3WIOyPKwdPPLuGRIA6%2B72UHq9XZ%2B8xzK8qja6YUT1fXeMsWZJ7n04Qt0PK0UEjhYPmENeHem%2FmYUz2Zryf%2FVjR%2Fyif%2BpoNNeLsGdYuZW%2BtNWAoo8nNKs1c%2BlmkOh6CHnjRksmGV3XGiDbVf1XTSjWibNHlmR%2BFtx13ZtRg8EU2TRs9JDEz0g%2FRwxWnUUQ4dJ%2FVo4kcp2%2FxX8t1%2FCYFCoREmVO4BTtmMiPgLhc9dBt563x3E2V9tZXT3ibnS3eF%2BF6odHO4dWw%3D%3D"
          alt="home-2"
        />
      </div>
      <div
        class="col-12 col-md-6 d-flex mt-3 justify-content-center align-items-start flex-column"
        data-aos="fade-up"
      >
        <p class="h6 text-info fw-bold" data-aos="fade-up">
          3D 製作流程 <span class="material-icons"> brush </span>
        </p>
        <p class="h2 text-dark" data-aos="fade-up">列印整修純手工上色</p>
        <p class="text-warning mt-2" data-aos="fade-up">
          將製作好的 3D 設計稿，進行
          3D列印，時間約3~5天不等，列印完後進行組裝修掉一些列印遺留下來邊邊角角的部份，最後開始進行角色適合的風格配色工作。
        </p>
        <p class="text-warning" data-aos="fade-up">
          純手工是一種使用的比較多的上色方法，操作比較簡單，比較適合處理複雜的細節。
          上色時需以來回平塗兩到三遍，可使手繪時產生的筆紋減淡，令色彩均勻飽滿，可以在第一層快干還沒幹時再上第二層，第二層的筆刷方向和第一層垂直，已達到最好的效果。
          使用的顏料主要有水性漆和油性漆兩大類。水性漆附著力和色彩表現都比油性漆略差一點（尤其是色澤表現上），但毒性性小或無毒。為了顏料可以更流暢色彩均勻的進行塗裝，可以滴入一些同品牌的溶劑在調色皿裡面進行稀釋。手工上色比較考驗操作人員的熟練程度，所以效果波動會比較大。
        </p>
        <RouterLink
          to="/about"
          id="btn02"
          class="col-8 col-md-6 mt-5 fw-bold btn btn-outline-secondary"
          data-aos="fade-up"
        >
          關於漢文帝
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moveTo () {
      const intro = document.querySelector('#intro')
      document.documentElement.scrollTop = intro.offsetTop
    }
  }
}
</script>

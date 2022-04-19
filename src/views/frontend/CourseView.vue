<template>
   <header class="position-relative mb-7 mb-md-9">
    <img
      class="d-lg-none d-block img-cover pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649056515409.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y3oVi0SPMebWOgvPqS5RHodE7xqByaugrJ0bU5Nh39%2FkgP61e0eITVD7AtElaYEW3y%2BnA%2FUZW3tYJHol9aYQ4CruEBRBMTedaUR%2F4sE44GRGEjRh7LifWCFKxD%2BY4hsD68zenE0s1Cb2WS%2BuBUuxrpx5ac2hsMgZypGfR%2FaCyF8Fh0jtifudelvL03JhoGOjSSdmzzeFJUk4eESF7ubqvjc5YFjSh6o2TVTUgIM10VrDxPVgVCTPgfQ%2B4PNaW86AAXGsrDothzw%2F5W6wsthdwEFzxe0obRdU%2F2mrEwSMCCAnA1qq9MihLktcPDbkYDKQQgNcpGIzq3s5257lU2CD5w%3D%3D"
      alt="關於漢文帝banner"
    />
    <img
      class="img-cover d-lg-block d-none pageBanner w-100"
      src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649486937361.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MV0ltytTHZJ%2FFGIlFNovcNBNkRHce3FdIgO0roi8w9RCkOEQXMGCOhAZ1RH%2B%2BlNeVaY0pVC5sCuLzCA%2FWAc0oEBvoiak1KxmsDkcwyMFkV4gsU%2FjHvfhk5KtGoUS7o%2BorWxIxsTrq4N53c5a6Qo1KHZ4xg%2BFRCISmaPyxX2falP3q56WIHTegBTTWE1jUcLEfoy608VibZKxE2CwTPiDQ9i2OoagdVKlb%2FRoWC7g5BLlreMW0AtGjmGffQHpW2OhvTpyAYW1BUrZww%2BVrRHr5n9JOm5VF6yEc78HSOxuZ1bc%2B809o9U2YkU9pRYCCORuMMMsBV3dnrEtxoj0V2yaTw%3D%3D"
      alt="關於漢文帝banner-pc"
    />
    <h2
      class="position-absolute text-hv-center top-50 start-50 h2 fw-bold text-white-50 pageBanner-text"
    >
      Course Admissions
    </h2>
  </header>

  <div class="container px-3">
    <div class="row g-3 mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="nav-link text-dark active p-0">
              首頁
            </RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">課程招生</li>
        </ol>
      </nav>
      <div class="container service pb-5">
        <div class="text-center" data-aos="fade-up">
          <h6 class="text-info mt-1 fw-bold text-uppercase">
            線上課程<span class="material-icons-outlined"> approval </span>
          </h6>
          <h1 class="mb-5 text-dark fw-bold">漢文帝線上課程教學</h1>
        </div>
        <div class="row g-4" data-aos="fade-up">
          <div class="col-lg-4">
            <div class="nav w-100 nav-pills me-4">
              <button
                class="nav-link nav-link01 w-100 d-flex class align-items-center text-start p-4 mb-4 active"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-1"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  edit_note
                </span>
                <h4 class="m-0">課程內容</h4>
              </button>
              <button
                class="nav-link nav-link01 w-100 d-flex class align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-2"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  edit_calendar
                </span>
                <h4 class="m-0">開課資訊</h4>
              </button>
              <button
                class="nav-link nav-link01 w-100 d-flex class align-items-center text-start p-4 mb-4"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-3"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  border_color
                </span>
                <h4 class="m-0">課程教材準備</h4>
              </button>
              <button
                class="nav-link nav-link01 w-100 d-flex class align-items-center text-start p-4 mb-0"
                data-bs-toggle="pill"
                data-bs-target="#tab-pane-4"
                type="button"
              >
                <span class="material-icons-outlined me-3 fs-2">
                  ondemand_video
                </span>
                <h4 class="m-0">線上說明會</h4>
              </button>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="tab-content w-100">
              <div class="tab-pane fade show active" id="tab-pane-1">
                <div class="row g-4">
                  <div class="col-md-6" style="max-height: 450px">
                    <div class="position-relative">
                      <img
                        class="position-absolute img-fluid w-100 border rounded p-1"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649060078449.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AeLHm5PXkwDXd6SO%2F3OP4ynX2uptQzMFYgj3oIXSHjqDhohZY1ftP9tkFxYHEGMm3HlhrlvdqjsCkwcyuPNJvBiEeB%2BdzikNIWjqkqC7rDa9P9ascvoCag4DlzVLWaThjqyp2XSFlqfrZC61GyuzER9Rxkv0WW3h06Ec4QsNnckhF9WTIStZGwSM3aEHlXwPzxZxfYSiioT0MWhTsanm%2Fhq%2FBkC7Z1CLfNai4FE2NeIEvl2YNIxb9qjywaLjd7%2FiO4krQKR732vBnYI9Oag5eCDZ4iKhDtU6yI0zZV3jCy9RKs8DyGpVv4QVy11VJT1gGBLgHzh7X9%2B%2Ba9WFS2KKgA%3D%3D"
                        style="object-fit: cover"
                        alt="課程內容"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">數位模型實體化設計班</h3>
                    <p class="mb-4 text-warning">
                      本線上課程依照程度 由學生客製主題 小班教學
                      希望學員可以做出自己的模型販售闖出一片天 課程內容 3D建模
                      拆建 列印 監修 翻模 上色
                      (建模80%實體化20%軟體及設備材料需自備)。
                    </p>
                    <p class="mb-4 text-warning">
                      本直播線上課 長度為四個月 建模和實體化
                      (可單獨報名建模部分) 帶領學生成從零到有完成二件模型。
                    </p>
                    <p class="mb-4 text-warning">
                      本課程有其困難度 軟體或機械操作 都需要不斷練習熟練之
                      最大的希望是學生能跟上進度 完成驚人作品 參賽曝光。
                    </p>
                    <p class="mb-4 text-warning">
                      課後講師持續追蹤學員進度!親自修改作業(創建賴群及社團)
                      分享銷售行銷經驗促進同學間互助合作。
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-2">
                <div class="row g-4">
                  <div class="col-md-6" style="max-height: 450px">
                    <div class="position-relative">
                      <img
                        class="position-absolute img-fluid w-100 border rounded p-1"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649060097465.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QuYpUEK%2FLJK2WX8sm7qhjlEUkavseUZlU8ZcjOhs%2F0vaNdxtL5FHm%2BXdmn8BeftTcsiNmeo6%2FAB1HH2Dtx2M9s7lpvkVx437L3ofe87FcVN6ji3Jahz%2FGntKrEbbCJ6PLsUZAwHjHgT1NsI4EHmg1Vr0fyvp1ywnhdXYTJnt1a%2Bl7PAjUq90cMHf7oEaU%2BgjhvP3pnswXjpzbgKjifss%2Brq8lx2wdXPR11K%2BtzWLqajDRHApkfc0d%2BkIEZPtNBh4LvoTE96dozFNkhU%2FSDZglEnOewt7QG3gYOs2z8qCrdnZpgcmoURGQ3J%2B4neHq0bagWdYd4Z2ypQ2Qh8dKGehAg%3D%3D"
                        style="object-fit: cover"
                        alt="開課資訊"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">開課資訊內容</h3>
                    <p class="mb-4 text-warning">
                      開課日期2022年 1月3日~4月28日。<br />課程總時數：
                      74小/建模28堂/實體化9堂/共37。<br />
                      時間：每周一周四 晚上9點到11點 (連假上課變)。
                    </p>
                    <p class="mb-4 text-warning">
                      費用：6000 月繳9000一次繳清32000。<br />
                      純建模 32000 月繳8000 繳清28000。<br />
                      為獎勵作品優秀學生講師提供協助列印。
                    </p>
                    <p class="mb-4 text-warning">
                      課程內容：3D建模/實體化：3D列印 修列印模 翻模量產
                      塗裝上色。
                    </p>
                    <p class="mb-4 text-warning">
                      使用工具：軟體(ZBRUSH和ZOOM和赤兔)電腦 繪圖板 3D印表機
                      噴槍等工具(需自備)。
                    </p>
                    <p class="mb-4 text-warning">
                      播軟體：需安裝ZOOM來上課 課後上傳雲端。
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-3">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 220px">
                    <div class="position-relative w-100">
                      <img
                        class="position-absolute img-fluid border rounded p-1"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649060113427.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=e6qCEpZcP5rhRNse9YSRHQGbpmxCn0zfYZRGG8twNF8QMz24543HlvdHkUrXluoNS7SIQD4EfhrY7nzwrVWMCP%2Bdm5Ay8pacCg2GCv2Zivae2teLADScxNbvO3wYlRzb8kbPYAEZ1zU6zXCenYtz%2BxONrVk2yH6JoJAJbUVd3LeerkfY9E57H01G4gNNYw%2F793AWVRdt6UBb5m96qAXEoAQsectWvYzoZN52N%2F6sYetD47j5yhLHTdN6RQrQ%2Fea62kZIntqwNB1vlRQ7E19kXR5AgCPVtF3wZlaZKFsBA2LbDHWJqLJtBoElOnOa%2BPPqd7mClzRSBnCR7fzV3xG7nA%3D%3D"
                        style="object-fit: cover"
                        alt="課程教材準備"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">軟體：ZBRUSH / ZOOM / ChituBox</h3>
                    <p class="mb-4 text-warning">
                      硬體推薦：<br />
                      繪製 : 筆電和電和繪圖板。<br />
                      列印 : 創想三維系列 容積式印表機和Phrozen系列
                      光固化印表機。
                    </p>
                    <p class="mb-4 text-warning">
                      修模 : 電熱筆 塑鋼土 噴漆補土 海綿砂紙 鉗子。<br />
                      翻模 : 真空槽 POLY塑酯 翻模矽膠。<br />
                    </p>
                    <p class="mb-4 text-warning">
                      上色 : 畫筆 油性和水性顏料 顏料盤 空壓機 噴槍
                      噴塗抽風過濾設備。<br />
                      EX : 若無列印、修模、翻模、上色設備，有提供場地器材
                      場地免費依使用量須支付材料費用 限北部。
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-4">
                <div class="row g-4">
                  <div class="col-md-6" style="min-height: 240px">
                    <div class="position-relative w-100">
                      <img
                        class="position-absolute img-fluid border rounded p-1"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/charlotte-hexschool/1649060132896.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=n8GoUCvvavuUMaApVCGPWmJA9TlmI0uVKDXrC%2F2ZvUSFhGwVgGYXpKLNlMgvQjuXQDnbNqNjNUHKLJzIMBBPHGhZBBoltXRPpoAXnlZzvgIAmgPnnw9g2mC3ADRo7KfAnI09vDFqKXgesNMcje7Crw4HUz%2FEhJ0sAs7AO5%2BPzvsIwZ3t6RoOPGjiu%2FXJ91afAgGdv1nORZ4VkkbU3mJOy99QyapAXE6tHzBbr3zoEeG9XEEfuIHPCD5E1RYXd7GrZdkYpgi4kFRe3X0qr11vD7PTz%2FMGcvENDDz%2Fw9LZqv49oRrBUyXCAGWfy3p4gTqZSnUPI%2FqzQOyoq1yG1ldrYA%3D%3D"
                        style="object-fit: cover"
                        alt="線上說明會"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="mb-3">漢文帝粉絲團線上直播</h3>
                    <p class="mb-4 text-warning">2022/12/6 晚上 0800</p>
                    <p class="mb-4 text-warning">
                      講師會在線上分享 人生歷練 自我介紹 各種的接案心得
                      以及課程的介紹。
                    </p>
                    <p class="mb-4 text-warning">歡迎線上互動 !!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid product-area text-center pt-5 pb-5">
    <div class="container">
      <p class="h6 text-info fw-bold" data-aos="fade-up">
        課程QA <span class="material-icons-outlined"> help_outline </span>
      </p>
      <p class="h1 text-dark mb-5" data-aos="fade-up">常見問題</p>
      <div class="row" data-aos="fade-up">
        <div class="col">
          <div class="col">
            <ul class="list-unstyled">
              <li class="mb-3" v-for="(article, key) in articles" :key="key">
                <div class="card">
                  <div
                    class="card-header d-flex align-items-center bg-white border-0"
                  >
                    <span class="bg-secondary text-white rounded p-1 me-3"
                      >Q{{ key + 1 }}</span
                    >
                    <a
                      href="#"
                      class="h5 mb-0 text-dark stretched-link text-start text-decoration-none"
                      @click.prevent="article.isOpen = !article.isOpen"
                      >{{ article.title }}
                    </a>
                    <span class="material-icons ms-auto" v-if="article.isOpen"
                      >keyboard_arrow_up</span
                    >
                    <span class="material-icons ms-auto" v-else
                      >keyboard_arrow_down</span
                    >
                  </div>
                  <div
                    v-if="article.isOpen"
                    class="transition card-body border-top"
                  >
                    <p
                      class="mb-0 text-warning text-start ps-md-5"
                    >
                      {{ article.description }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CustomLoading :active="isLoading" />
</template>

<script>
export default {
  name: '課程招生',
  data () {
    return {
      articles: [],
      content: '',
      isOpen: true,
      isLoading: false
    }
  },
  methods: {
    getArticles () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles`
      this.isLoading = true
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.articles = res.data.articles
          }
        })
    }
  },
  created () {
    this.getArticles()
  }
}
</script>

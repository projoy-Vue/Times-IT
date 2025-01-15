import{_ as g,o as r,c as n,a as e,m as b,b as k,r as p,d as R,w as C,v as $,F as m,e as _,t as d,f as u,g as O,h,T as x,n as S,i as D,j as B,k as P,l as I}from"./index-CfyN9JMp.js";const N={name:"CourseHeader",methods:{navgatTOcontact(){this.$router.push("/contact")}}},V={class:"course-header"},G={class:"content"};function U(i,t,f,v,l,a){return r(),n("header",V,[e("div",G,[t[1]||(t[1]=e("h1",null,"Explore Our Courses",-1)),t[2]||(t[2]=e("p",null,"Find the perfect course to take your skills to the next level. Start learning today!",-1)),e("button",{onClick:t[0]||(t[0]=(...s)=>a.navgatTOcontact&&a.navgatTOcontact(...s)),class:"cta-button"},"Get Started")])])}const z=g(N,[["render",U],["__scopeId","data-v-f6e6e3a9"]]),E={data(){return{selectedCategory:"All",selectedSort:"title",sortOrder:"asc"}},computed:{...b("courses",["categories","paginatedCourses","totalPages"]),currentPage(){return this.$store.state.courses.filters.currentPage}},methods:{...k("courses",["updateCategory","updateSort","updatePage"]),filterByCategory(){this.updateCategory(this.selectedCategory)},sortCourses(){this.updateSort({sort:this.selectedSort,sortOrder:this.sortOrder})},prevPage(){this.updatePage(this.currentPage-1)},nextPage(){this.updatePage(this.currentPage+1)},viewCourseDetails(i){this.$router.push(`/course/${i}`)}}},J={class:"course-grid"},F={class:"filters"},L={class:"filter-group"},H=["value"],j={class:"filter-group"},M={class:"filter-group"},Q={class:"course-content"},Y={class:"course-title"},W={class:"course-description"},q={class:"course-meta"},K=["onClick"],X={class:"pagination"},Z=["disabled"],tt=["disabled"];function et(i,t,f,v,l,a){const s=p("lazy-image"),c=R("lazy");return r(),n("section",J,[e("div",F,[e("div",L,[t[9]||(t[9]=e("label",{for:"category"},"Category:",-1)),C(e("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=o=>l.selectedCategory=o),onChange:t[1]||(t[1]=(...o)=>a.filterByCategory&&a.filterByCategory(...o))},[t[8]||(t[8]=e("option",{value:"All"},"All Categories",-1)),(r(!0),n(m,null,_(i.categories,o=>(r(),n("option",{key:o,value:o},d(o),9,H))),128))],544),[[$,l.selectedCategory]])]),e("div",j,[t[11]||(t[11]=e("label",{for:"sort"},"Sort By:",-1)),C(e("select",{id:"sort","onUpdate:modelValue":t[2]||(t[2]=o=>l.selectedSort=o),onChange:t[3]||(t[3]=(...o)=>a.sortCourses&&a.sortCourses(...o))},t[10]||(t[10]=[e("option",{value:"title"},"Title",-1),e("option",{value:"fee"},"Fee",-1),e("option",{value:"duration"},"Duration",-1)]),544),[[$,l.selectedSort]])]),e("div",M,[t[13]||(t[13]=e("label",{for:"sortOrder"},"Order:",-1)),C(e("select",{id:"sortOrder","onUpdate:modelValue":t[4]||(t[4]=o=>l.sortOrder=o),onChange:t[5]||(t[5]=(...o)=>a.sortCourses&&a.sortCourses(...o))},t[12]||(t[12]=[e("option",{value:"asc"},"Ascending",-1),e("option",{value:"desc"},"Descending",-1)]),544),[[$,l.sortOrder]])])]),u(x,{name:"fade",tag:"div",class:"courses"},{default:O(()=>[(r(!0),n(m,null,_(i.paginatedCourses,o=>(r(),n("div",{key:o.id,class:"course-card"},[C(u(s,{alt:o.title,class:"course-image"},null,8,["alt"]),[[c,`/images/${o.image}`]]),e("div",Q,[e("h3",Y,d(o.title),1),e("p",W,d(o.description),1),e("p",q,[e("span",null,[t[14]||(t[14]=e("strong",null,"Duration:",-1)),h(" "+d(o.duration),1)]),e("span",null,[t[15]||(t[15]=e("strong",null,"Fee:",-1)),h(" $"+d(o.fee),1)])]),e("button",{class:"btn-view-details",onClick:y=>a.viewCourseDetails(o.id)},"View Details",8,K)])]))),128))]),_:1}),e("div",X,[e("button",{class:"btn-pagination",onClick:t[6]||(t[6]=(...o)=>a.prevPage&&a.prevPage(...o)),disabled:a.currentPage===1},"Previous",8,Z),e("span",null,"Page "+d(a.currentPage)+" of "+d(i.totalPages),1),e("button",{class:"btn-pagination",onClick:t[7]||(t[7]=(...o)=>a.nextPage&&a.nextPage(...o)),disabled:a.currentPage===i.totalPages},"Next",8,tt)])])}const st=g(E,[["render",et],["__scopeId","data-v-eeb4eda6"]]),ot={name:"SubscriptionPlans",data(){return{plans:[{name:"Basic",price:9.99,features:["Access to all free courses","Community Support"],isPopular:!1},{name:"Standard",price:19.99,features:["Access to all courses","Priority Support","Certificate of Completion"],isPopular:!0},{name:"Premium",price:29.99,features:["Access to all courses","1-on-1 Mentorship","Exclusive Webinars","Certificate of Completion"],isPopular:!1}]}}},at={class:"subscription-plans"},rt={class:"plans-container"},nt={class:"plan-title"},it={class:"plan-price"},lt={class:"plan-features"},dt={class:"subscribe-button"};function ct(i,t,f,v,l,a){return r(),n("section",at,[t[2]||(t[2]=e("h2",{class:"section-title"},"Choose Your Plan",-1)),t[3]||(t[3]=e("p",{class:"section-description"}," Flexible subscription plans to suit your learning goals. ",-1)),e("div",rt,[(r(!0),n(m,null,_(l.plans,(s,c)=>(r(),n("div",{key:c,class:S(["plan-card",{highlighted:s.isPopular}])},[e("h3",nt,d(s.name),1),e("p",it,[t[0]||(t[0]=e("span",{class:"currency"},"$",-1)),h(d(s.price)+" ",1),t[1]||(t[1]=e("span",{class:"duration"},"/month",-1))]),e("ul",lt,[(r(!0),n(m,null,_(s.features,(o,y)=>(r(),n("li",{key:y},d(o),1))),128))]),e("button",dt,d(s.isPopular?"Get Started":"Subscribe Now"),1)],2))),128))])])}const ut=g(ot,[["render",ct],["__scopeId","data-v-ef69bc87"]]),pt={data(){return{searchQuery:""}},computed:{...b("resources",["filteredResources","resourceTypes","selectedType"])},methods:{...k("resources",["filterResources","filterByType"])},created(){this.filterResources("")}},gt={class:"resources-download"},ft={class:"search-bar"},vt={class:"filters"},mt=["onClick"],_t={class:"resource-grid"},Ct={class:"card-header"},yt={class:"file-type"},ht={class:"description"},$t=["href"];function bt(i,t,f,v,l,a){return r(),n("section",gt,[t[2]||(t[2]=e("h2",{class:"section-title"},"Download Resources",-1)),e("div",ft,[C(e("input",{type:"text",placeholder:"Search for resources...","onUpdate:modelValue":t[0]||(t[0]=s=>l.searchQuery=s),onInput:t[1]||(t[1]=(...s)=>i.filterResources&&i.filterResources(...s))},null,544),[[D,l.searchQuery]])]),e("div",vt,[(r(!0),n(m,null,_(i.resourceTypes,s=>(r(),n("button",{key:s,class:S({active:i.selectedType===s}),onClick:c=>i.filterByType(s)},d(s),11,mt))),128))]),e("div",_t,[(r(!0),n(m,null,_(i.filteredResources,s=>(r(),n("div",{key:s.id,class:"resource-card"},[e("div",Ct,[e("h3",null,d(s.title),1),e("span",yt,d(s.type),1)]),e("p",ht,d(s.description),1),e("a",{href:s.downloadLink,target:"_blank",class:"download-btn"}," Download ",8,$t)]))),128))])])}const St=g(pt,[["render",bt],["__scopeId","data-v-8bcb1dba"]]),Pt={computed:{...b("community",["membersCount","eventsCount","projectsCount"])},methods:{NavigationTopage(){this.$router.push("/community")}}},kt={class:"join-community"},Tt={class:"community-content"};function wt(i,t,f,v,l,a){return r(),n("section",kt,[e("div",Tt,[t[1]||(t[1]=B('<h2 class="title" data-v-7c2f97a8>Join Our Community</h2><p class="description" data-v-7c2f97a8> Be a part of an amazing community of learners, creators, and professionals. Get access to exclusive resources, events, and networking opportunities. </p><div class="stats" data-v-7c2f97a8><div class="stat-item" data-v-7c2f97a8><h3 data-v-7c2f97a8>10,000+</h3><p data-v-7c2f97a8>Members</p></div><div class="stat-item" data-v-7c2f97a8><h3 data-v-7c2f97a8>500+</h3><p data-v-7c2f97a8>Events Hosted</p></div><div class="stat-item" data-v-7c2f97a8><h3 data-v-7c2f97a8>1,000+</h3><p data-v-7c2f97a8>Projects Shared</p></div></div>',3)),e("button",{onClick:t[0]||(t[0]=(...s)=>a.NavigationTopage&&a.NavigationTopage(...s)),class:"cta-btn"},"Join Now")]),t[2]||(t[2]=e("div",{class:"community-image"},[e("img",{src:"https://picsum.photos/536/354",alt:"Community Illustration"})],-1))])}const At=g(Pt,[["render",wt],["__scopeId","data-v-7c2f97a8"]]),Rt={data(){return{loading:!0,stats:{"Students Enrolled":0,"Average Rating":0,"Average Completion Time":"0 hours"}}},mounted(){setTimeout(()=>{this.loading=!1,this.stats={"Students Enrolled":100,"Average Rating":4.5,"Average Completion Time":"2 hours"}},2e3)},methods:{getIconClass(i){switch(i){case"Students Enrolled":return"fa fa-users";case"Average Rating":return"fa fa-star";case"Average Completion Time":return"fa fa-clock";default:return"fa fa-info-circle"}},getStatStyle(i){return i==="Average Rating"?{color:this.stats["Average Rating"]>=4?"#4caf50":"#ff9800"}:{}}}},Ot={class:"course-statistics"},xt={key:0,class:"loading"},Dt={key:1,class:"stats-grid"},Bt={class:"stat-icon"},It={class:"stat-title"},Nt={key:0,class:"progress-bar"};function Vt(i,t,f,v,l,a){return r(),n("section",Ot,[t[1]||(t[1]=e("h2",{class:"title"},"Course Statistics",-1)),l.loading?(r(),n("div",xt,t[0]||(t[0]=[e("span",{class:"loader"},null,-1),h(" Loading statistics... ")]))):(r(),n("div",Dt,[(r(!0),n(m,null,_(l.stats,(s,c)=>(r(),n("div",{class:"stat-card",key:c},[e("div",Bt,[e("i",{class:S(a.getIconClass(c))},null,2)]),e("h3",It,d(c),1),e("p",{class:"stat-value",style:P(a.getStatStyle(c))},d(c==="Average Rating"?s+" / 5":s),5),c==="Average Rating"?(r(),n("div",Nt,[e("div",{style:P({width:s/5*100+"%"})},null,4)])):I("",!0)]))),128))]))])}const Gt=g(Rt,[["render",Vt],["__scopeId","data-v-c19ba668"]]),Ut={methods:{navigateToSignUp(){this.$router.push({name:"sign-up"})}}},zt={class:"call-to-action"},Et={class:"cta-content"};function Jt(i,t,f,v,l,a){return r(),n("section",zt,[e("div",Et,[t[1]||(t[1]=e("h2",{class:"cta-heading"},"Start Your Learning Journey Today!",-1)),t[2]||(t[2]=e("p",{class:"cta-text"}," Unlock your potential with our expertly crafted courses. Join thousands of learners and start achieving your goals today! ",-1)),e("button",{class:"cta-button",onClick:t[0]||(t[0]=(...s)=>a.navigateToSignUp&&a.navigateToSignUp(...s))},"Start Learning Today")])])}const Ft=g(Ut,[["render",Jt],["__scopeId","data-v-e6aa3ec1"]]),Lt={components:{CourseHeader:z,CourseGrid:st,SubscriptionPlans:ut,ResourcesDownload:St,JoinOurCommunity:At,CourseStatistics:Gt,CallToAction:Ft}},Ht={class:"courses"};function jt(i,t,f,v,l,a){const s=p("CourseHeader"),c=p("CourseGrid"),o=p("SubscriptionPlans"),y=p("ResourcesDownload"),T=p("JoinOurCommunity"),w=p("CourseStatistics"),A=p("CallToAction");return r(),n("div",Ht,[u(s),u(c),u(o),u(y),u(T),u(w),u(A)])}const Qt=g(Lt,[["render",jt]]);export{Qt as default};
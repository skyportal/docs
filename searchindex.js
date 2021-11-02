Search.setIndex({docnames:["adding_features","advanced_usage","api","comment_url_migration","contributing","data_loader","database","deploy","design","dev","index","migrations","papers/joss/paper","permissions","query_analysis","setup","slack","styling","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["adding_features.md","advanced_usage.md","api.rst","comment_url_migration.md","contributing.md","data_loader.md","database.rst","deploy.md","design.md","dev.md","index.rst","migrations.md","papers/joss/paper.md","permissions.md","query_analysis.md","setup.md","slack.md","styling.md","usage.md"],objects:{"baselayer.app":{models:[6,0,0,"-"]},"baselayer.app.models":{ACL:[6,1,1,""],AccessibleIfRelatedRowsAreAccessible:[6,1,1,""],AccessibleIfUserMatches:[6,1,1,""],ComposedAccessControl:[6,1,1,""],CronJobRun:[6,1,1,""],CustomUserAccessControl:[6,1,1,""],JoinModel:[6,1,1,""],Public:[6,1,1,""],Restricted:[6,1,1,""],Role:[6,1,1,""],RoleACL:[6,1,1,""],SlugifiedStr:[6,1,1,""],Token:[6,1,1,""],TokenACL:[6,1,1,""],User:[6,1,1,""],UserACL:[6,1,1,""],UserAccessControl:[6,1,1,""],UserRole:[6,1,1,""],init_db:[6,5,1,""],join_model:[6,5,1,""]},"baselayer.app.models.ACL":{created_at:[6,2,1,""],id:[6,2,1,""],modified:[6,2,1,""]},"baselayer.app.models.AccessibleIfRelatedRowsAreAccessible":{query_accessible_rows:[6,3,1,""]},"baselayer.app.models.AccessibleIfUserMatches":{query_accessible_rows:[6,3,1,""],relationship_names:[6,4,1,""]},"baselayer.app.models.ComposedAccessControl":{query_accessible_rows:[6,3,1,""]},"baselayer.app.models.CronJobRun":{created_at:[6,2,1,""],exit_status:[6,2,1,""],id:[6,2,1,""],modified:[6,2,1,""],output:[6,2,1,""],script:[6,2,1,""]},"baselayer.app.models.CustomUserAccessControl":{query_accessible_rows:[6,3,1,""]},"baselayer.app.models.Public":{query_accessible_rows:[6,3,1,""]},"baselayer.app.models.Restricted":{query_accessible_rows:[6,3,1,""]},"baselayer.app.models.Role":{acls:[6,2,1,""],created_at:[6,2,1,""],id:[6,2,1,""],modified:[6,2,1,""],users:[6,2,1,""]},"baselayer.app.models.RoleACL":{create:[6,2,1,""],created_at:[6,2,1,""],id:[6,2,1,""],modified:[6,2,1,""],read:[6,2,1,""]},"baselayer.app.models.SlugifiedStr":{impl:[6,2,1,""],process_bind_param:[6,3,1,""],process_result_value:[6,3,1,""]},"baselayer.app.models.Token":{"delete":[6,2,1,""],accessible_groups:[6,4,1,""],accessible_streams:[6,4,1,""],acls:[6,2,1,""],create:[6,2,1,""],created_at:[6,2,1,""],created_by:[6,2,1,""],created_by_id:[6,2,1,""],groups:[6,4,1,""],id:[6,2,1,""],is_readable_by:[6,3,1,""],modified:[6,2,1,""],name:[6,2,1,""],read:[6,2,1,""],update:[6,2,1,""]},"baselayer.app.models.TokenACL":{create:[6,2,1,""],created_at:[6,2,1,""],id:[6,2,1,""],modified:[6,2,1,""],read:[6,2,1,""]},"baselayer.app.models.User":{"delete":[6,2,1,""],accessible_groups:[6,4,1,""],accessible_streams:[6,4,1,""],acls:[6,2,1,""],assignments:[6,2,1,""],contact_email:[6,2,1,""],contact_phone:[6,2,1,""],created_at:[6,2,1,""],expiration_date:[6,2,1,""],first_name:[6,2,1,""],followup_requests:[6,2,1,""],gcnevents:[6,2,1,""],gcnnotices:[6,2,1,""],gcntags:[6,2,1,""],gravatar_url:[6,4,1,""],group_admission_requests:[6,2,1,""],groups:[6,2,1,""],id:[6,2,1,""],is_active:[6,3,1,""],is_authenticated:[6,3,1,""],last_name:[6,2,1,""],listings:[6,2,1,""],localizations:[6,2,1,""],modified:[6,2,1,""],notifications:[6,2,1,""],oauth_uid:[6,2,1,""],observing_runs:[6,2,1,""],permissions:[6,4,1,""],photometry:[6,2,1,""],preferences:[6,2,1,""],roles:[6,2,1,""],source_notifications:[6,2,1,""],sources:[6,2,1,""],spectra:[6,2,1,""],streams:[6,2,1,""],to_dict:[6,3,1,""],tokens:[6,2,1,""],transactions:[6,2,1,""],update:[6,2,1,""],user_model:[6,3,1,""],username:[6,2,1,""]},"baselayer.app.models.UserACL":{create:[6,2,1,""],created_at:[6,2,1,""],id:[6,2,1,""],modified:[6,2,1,""],read:[6,2,1,""]},"baselayer.app.models.UserAccessControl":{check_cls_for_attributes:[6,3,1,""],query_accessible_rows:[6,3,1,""],user_id_from_user_or_token:[6,3,1,""]},"baselayer.app.models.UserRole":{create:[6,2,1,""],created_at:[6,2,1,""],id:[6,2,1,""],modified:[6,2,1,""],read:[6,2,1,""]},"skyportal.models":{token_groups:[6,2,1,""],user_or_token_accessible_groups:[6,2,1,""],user_or_token_accessible_streams:[6,2,1,""]},skyportal:{models:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:function"},terms:{"0":[0,6,15,17],"0000":12,"0001":12,"0002":12,"04":15,"0410":12,"0b2":15,"0px":17,"1":[0,4,5,6,10,12,13,14,15,16,17],"10":[1,6,13],"116":5,"12":[15,17],"127":15,"1280px":17,"14gqr":[0,5],"14gqr_new":5,"14gqr_unsaved_copi":5,"16":15,"1870":5,"1891":12,"1920px":17,"1rem":17,"2":[0,1,4,12,15,17],"200":1,"2016":12,"2019":[1,12],"2021exampl":1,"216x":12,"239868fa":1,"2rem":17,"3":[4,13,15,17],"32":15,"33":5,"3600":6,"3633675":5,"4":17,"400":[0,1,4,13],"404":0,"41ad":1,"4a8180609df6":1,"5":[1,5,6,15,17],"5000":[0,1,10,15],"5432":15,"599":4,"5m":5,"5rem":17,"6":[5,15,17],"600px":17,"644":4,"7":[12,15],"7183":12,"7777":12,"8":[1,15],"8307":1,"8361345":5,"9":[1,15],"9000":7,"9276":12,"960px":17,"983f":1,"abstract":10,"boolean":6,"break":0,"byte":5,"case":[0,1,3,4,10,12,13,14,16,17],"catch":9,"class":[0,6,9,17],"const":[0,17],"default":[0,6,7,12,13,15],"do":[0,1,3,4,5,7,8,14,15],"export":0,"final":[0,1,12,14],"function":[0,4,6,9,12],"import":[0,1,9,13,14,15,17],"int":6,"long":[0,4,14],"new":[3,4,5,6,9,10,15,16,18],"null":6,"public":[6,10,13,15],"return":[0,1,4,6,9,13,16,17],"st\u00e9fan":12,"static":[0,6],"switch":[0,4],"transient":12,"true":[0,6,13],"try":[0,14,15],"var":15,"while":[4,15,16,17],A:[0,4,5,6,13,14,16],As:[0,4,13,14],At:13,Be:13,But:12,By:[0,10,12,15],For:[0,1,3,4,6,9,12,14,16,17],If:[0,1,4,5,6,10,11,13,15,16,18],In:[0,1,3,4,12,13,15,16,17],It:[9,10,12,13,14,17],On:[9,10],One:[1,6],Or:[7,9],That:[0,1],The:[0,1,4,5,6,7,8,9,10,12,13,15,16,17,18],Then:[0,10,16],There:17,These:[0,9,13,15],To:[0,4,5,9,10,11,13,14,15,16,18],With:[0,13],_:[0,1,12,16,18],__init__:0,__str__:9,__subclasses__:6,_fail:0,_id:6,_ok:0,abil:12,abl:[12,13,16],about:[0,4,9,14],abov:[0,9,11,13,16,17,18],accept:[1,4],access:[0,1,3,4,6,9,10,12,14,16,18],access_control:6,accesserror:13,accessible_by_own:13,accessible_group:6,accessible_stream:6,accessible_to_own:13,accessible_to_owner_or_last_modified_bi:13,accessibleifrelatedrowsareaccess:6,accessibleifusermatch:[6,13],accident:3,accommod:3,accompani:4,accomplish:0,accordingli:[0,3],account:6,acl:[1,6,9,12,13,18],acl_id:6,across:4,act:[2,16],action:[0,4,18],action_typ:0,actiontyp:0,activ:[0,6,7,12,15,16],actual:[0,14],ad:[4,9,10,13,15],add:[0,4,9,12,13,15,16,18],addit:[0,6,16],addition:15,address:[4,15],adequ:4,adjust:12,admin:[5,6,10,13,18],administr:[12,16],advanc:10,advantag:13,affect:7,affili:12,after:[0,9,11,14,16],against:[13,14],aggreg:6,agre:4,aid:12,aim:[4,12],alemb:11,alia:6,alik:4,all:[0,1,3,4,6,7,8,9,12,13,14,15,16,17,18],allig:0,allow:[0,4,9,10,13,15,16,18],allski:5,allskycurrentimag:5,along:[1,6],alreadi:[0,6,10,16],also:[0,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18],altern:0,although:13,alwai:0,amend:4,an:[0,4,5,6,7,9,10,12,14,18],analysi:12,analyz:[10,12],and_:13,ani:[0,3,4,6,7,9,11,13,14,15,16],annot:[1,3,6,12],annotationid:3,annotations_on_spectra:6,anoth:[0,4,10,14],anyon:[6,13,15,16],anyth:[0,6],api:[0,1,3,4,5,9,10,12,14,16,17],app:[0,6,9,10,11,13,15,18],app_serv:0,appear:0,append:0,appli:[0,3,7,8,13],applic:[0,1,6,7,8,9,10,12,16,18],appreci:4,approach:14,appropri:12,apt:[9,15],ar:[0,1,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18],arbitrari:[1,13],arbitrarili:13,architectur:10,arcsec:1,arg:6,argu:4,argument:0,arien:12,around:14,arrai:0,arrow:0,art:4,ask:[4,14],assign:[0,6],associ:[0,3,6,9,12,16],assum:[0,6,15],astronom:[10,12,13],astronomi:12,async:0,asynchron:[0,10],atom:1,attach:9,attempt:[6,8,18],attr:6,attribut:[0,5,6,9,13],audit:10,augment:4,auth:15,auth_or_token:0,authent:[0,1,6,12],author:[1,4,9,12],autoflush:6,autogener:11,autom:12,automat:[0,7,11,13,15,17,18],avail:17,avoid:[7,9,15],await:0,b64:5,b:13,back:[6,8,10],backend:[6,9,10,12,13,14],backgroundcolor:17,band:12,base:[0,1,4,6,9,12,13,14],base_url:0,basehandl:0,baselay:[0,6,9,12,13],bash:7,becaus:[0,4,12,17],becom:[5,8],become_us:[0,10,15],been:[0,4,6,10,11],befor:[0,4,8,9,10,13,15],behav:0,behavior:[0,1,6,7,9],being:[0,4,6,9,12,14],belong:18,below:[0,4,13,15,16,17],benefit:[4,8,10],berkelei:12,best:[12,13],better:3,betti:[10,12],between:[12,17],beyond:0,bianca:5,bib:12,bibliographi:12,biggest:14,bin:[7,15],binari:15,bit:0,bitwis:13,black:[4,9],blank:17,bloat:9,block:0,bloom:12,blue:[16,17],bodi:0,bokeh:12,bool:6,bool_and:13,border:17,both:[0,1,7,13,14],bottleneck:14,bound:6,boundari:8,bp:1,br:0,brace:0,branch:[0,4,11],breakpoint:17,brett:12,brew:15,brief:0,bring:13,broker:12,brows:7,browser:[0,9,10,12,15,16,18],bsd:[4,8,10,12],bug:9,build:[0,8,9,10,12,15,16],built:[0,2,8,10,14,17],bulk:13,bundl:0,button:[0,4,16,17],bypass:0,c:[7,13],cach:0,california:12,call:[0,6,7,9,12,13],callback:0,caltech:5,can:[0,1,4,5,6,7,9,10,12,13,14,15,17,18],cannot:17,capabl:0,capit:0,captur:0,care:9,carri:14,cascad:[0,9],catalog:1,caught:0,caus:[1,13,15],cd:[10,15],cell:17,certain:[4,14],cesium:[5,12,15],cfg:9,chain:6,chanc:4,chang:[0,3,8,9,10,11,12,13,14,15,18],channel:16,chat:12,cheap:0,check:[0,6,9,11,14],check_cls_for_attribut:6,checker:13,checkmark:4,child:9,children:9,choic:16,choos:[4,16],chosen:12,chunk:18,ci:[10,12],circl:16,cl:[6,13],classif:[13,16],classmethod:6,classnam:17,clean:12,clear:18,click:[0,4,16,17,18],click_xpath:0,clone:[4,10,15],close:10,cloud:[10,12],clunki:0,cluster:10,code:[0,9,10,13],collabor:[10,12],collect:[6,13,18],color:[12,17],column:[0,5,6,13,14,17],column_1:6,column_2:6,com:[4,10,15,16],combin:[8,16],come:[0,4,14],comma:14,command:[6,9,15],comment:[0,4,6,9,13,16,18],comment_input:0,comment_text:0,commenthandl:0,commentid:3,comments_on_spectra:6,commentsact:0,commenttext:0,commit:[0,4,11,12,13,18],common:[9,14],commonli:[7,18],commun:[4,6,10,12,14,16],compact:0,comparator_factori:6,comparison:6,compil:[0,14],complet:[0,9],complex:13,compli:1,complic:15,compon:[4,8,10,12],compos:[7,13],composedaccesscontrol:6,compromis:16,comput:12,concis:0,conda:15,conduit:16,conf:15,config:[0,7,11,15],configur:[0,8],conform:9,conftest:9,confus:17,conjuct:0,conjunct:0,connect:[0,6,9,14,15],consid:4,consider:9,consist:[0,13],constant:0,constrain:0,constraint:9,construct:[6,9,13],consult:10,contact:6,contact_email:6,contact_phon:6,contain:[0,1,5,9,12,15,17],content:0,content_typ:1,continu:4,contract:10,contribut:8,contributor:4,control:[0,6,9,10,12,14,18],conveni:[9,17,18],convent:14,convers:[4,14],convert:[0,6,9],copi:[0,15,16],copy_valu:6,copyright:4,core:17,correct:4,correctli:[1,4,12],correspond:[0,5,6,13],cost:10,could:[0,6,8,13],count:0,counter:0,cover:10,creat:[0,4,5,6,7,9,12,16,18],create_t:7,created_at:[0,6],created_bi:6,created_by_id:6,creator:0,credenti:15,crellin:12,critic:16,cron:6,cronjobrun:6,cross:[1,14],cross_match_robot:1,crud:13,css:17,csv:5,curli:0,current:[0,1,4,6,11,12,13],current_us:0,cursor:6,curv:[12,15],custom:[6,12,13,17],customiz:[1,12],customseraccesscontrol:13,customuseraccesscontrol:[6,13],d:[0,4,7,10,12,13,14,15],dask:12,data:[3,6,9,10,12,13,16],data_load:5,databas:[0,1,7,10,13,15,18],dataset:12,date:[6,12],datetim:0,db:[0,6,7,9,11,18],db_clear:15,db_demo:5,db_init:[10,15],dbapi:6,dbdata:7,dbsession:[0,9,13,14],deal:[4,12],debug:14,debug_login:15,declar:[0,6,9],declarative_bas:0,declarativemeta:[6,13],decor:0,def:[0,13],defin:[0,4,6,9,13,14,17],definit:[0,17],delet:[0,6,9,13,16],deletable_phot_queri:13,deliv:16,demo:[10,15],depart:12,depend:[0,9,10,13],deploi:[7,12,15],deploy:[10,12],depth:14,der:12,deriv:1,describ:[0,6,7,9,14,18],descript:[0,4,11],design:[6,8,10,12],desir:[0,6,16],destructur:0,detail:[0,4,14],detect:13,determin:[0,12],dev:15,develop:[4,8,10,12,13,17,18],diagram:[0,8],dialect:[6,14],dialog:16,diamet:5,dict:6,dictionari:[0,1,4,6],differ:[1,3,4,13,14,15],dig:0,direct:[4,15,16],directli:[4,6,9,13,14],directori:[0,7,10],dirti:0,discard:6,discoveri:[10,12],discuss:[0,7,12],disk:0,dispar:10,dispatch:0,displai:[0,6,9,12],distinguish:0,distribut:12,div:0,doc:[0,10,15,17],docker:12,document:[0,2,10,11,14,15],doe:[4,7,9,13,17,18],doesn:0,dom:0,domain:10,don:[4,10],done:[1,4,12,14,17,18],down:[0,4,7,9,17],downtim:16,drawn:[0,1],drive:[8,15],driven:12,driver:0,drop:18,duck:0,dummi:[0,6],dump:1,dure:[0,10,12,13],dynam:0,e:[0,1,3,4,5,6,9,11,12,13,16,17],each:[0,1,4,5,6,9,12,13,14,16,18],easi:6,easier:14,easiest:7,easili:[12,14,17],edit:[14,15,17],edu:5,effect:8,effici:13,either:[0,4,7,13,14,15],elast:10,eleg:4,element:[12,17],elev:5,elig:9,elimin:9,els:0,email:[6,15],emploi:[0,1,12],empti:[0,1,7],enabl:[15,16],encod:5,encount:13,encourag:[8,10,12],end:[1,3,6,13],endpoint:[0,3,4,5,13],engine_arg:6,enough:4,ensur:[0,6,9,11,12,13,14,15],enter:[0,16],entir:[12,14],entiti:16,entri:[0,1,5,13],enumer:1,env:[9,13],environ:[4,10],envis:14,equal:0,equival:[0,14],error:[0,4,9,13,14,15,16,18],error_occur:0,es6:0,eslint:9,especi:14,essenti:0,etc:[0,4,5,9,12,13,14,15,18],evalu:[0,17],even:[15,16],event:[0,10,12],eventu:12,ever:[4,14],everi:[0,12,13,14],everyth:15,everytim:0,exact:14,exactli:[4,8],exampl:[0,1,4,5,6,7,9,12,14,16],except:[0,6],exec:7,execut:[0,6,9,13,18],exercis:0,exist:[1,3,13],exit:6,exit_statu:6,expand:1,expect:[0,6],experi:[12,13,14],expir:6,expiration_d:6,explan:4,explicitli:0,express:[0,14],ext:6,extend:0,extens:[10,12],extern:0,extra:[6,17],extract:15,f:[0,1,7],face:15,facil:[12,13],facilit:0,facilitytransact:6,factori:[9,12],fail:[0,16],fals:[0,5,15],far:0,fast:8,faster:9,fault:16,favorit:16,featur:[4,10],februari:12,feedback:4,fetch:[0,6,7],fetch_comments_ok:0,fetch_loaded_sourc:0,fetch_sourc:0,fetch_test_com:0,fetch_test_comments_ok:0,fetchcom:0,fetchon:6,fetchsourc:0,few:0,field:[0,1,4,5,6],figur:14,file:[2,4,9,11,15,18],filter:[0,5,13,14],filtered_deletable_queri:13,find:[4,9,14],finish:[0,13],fire:[0,9],firefox:[9,12,15],first:[0,1,4,6,7,9,10,14,16,18],first_nam:6,fit:15,fix:[4,14,18],fk_1:6,fk_2:6,flag:[6,7,15],flavor:4,follow:[0,1,4,6,7,8,9,10,11,13,14,15,17],followup:13,followup_request:6,font:17,foreign:[6,9],foreignkei:0,fork:4,form:[0,4,16],format:[1,5,17],formatt:4,foster:10,found:[9,14],foundat:[10,12],framework:[0,3,13,14],fresh:9,from:[0,1,6,7,9,10,12,13,14,15,16,17,18],front:[1,6],frontend:[0,8,9,10,12,16,18],full:[0,4,14],fulli:[0,10],func:13,futur:1,g:[0,1,3,5,6,9,12,13,16],gaia:1,gal:1,gcnevent:6,gcnnotic:6,gcntag:6,geckodriv:[4,9,12,15],gener:[0,2,9,13,14,16,17,18],get:[0,3,4,9,13,14,15,18],get_if_accessible_bi:13,get_json:0,get_records_accessible_bi:13,getelementbyid:0,getstat:0,git:[10,15,18],githook:18,github:[4,10,15],give:[0,4,18],given:[0,1,6,12,13,14,16],global:0,go:14,goe:[0,4,9],goldstein:12,good:[4,14],googl:[10,12,15],gordon:[10,12],got:10,govern:13,grant:[6,10,12,13],granular:13,graphic:12,graphviz:15,gravatar:6,gravatar_url:6,great:0,green:[4,17],group:[5,6,10,12,13],group_admin:5,group_admission_request:6,group_bi:13,group_id:5,groupus:13,grow:4,guarante:[9,16],guid:[4,8],guidanc:[4,14],h1:0,ha:[0,4,5,6,10,11,12,13,15,16],hand:[0,11,12],handl:0,handleclick:0,handlecommenttextchang:0,handler:[0,9,14],handlesubmitnewcom:0,happen:[0,11,15],hard:[0,14],harder:[3,17],have:[0,1,3,4,6,7,11,12,13,14,15,17,18],haven:[0,10],head:11,header:[0,1],headless:[9,18],headlessli:9,hello:0,helloworldel:0,help:[0,4,12,14,18],helper:6,henc:4,here:[0,1,5,7,14,17,18],hierarch:10,histori:4,home:10,homebrew:15,homepag:0,hook:[0,6,17,18],host:[6,12,15],how:[0,1,6,7,10,14,15],howev:4,html:[2,17],http:[0,1,5,7,10,13,15,16],hub:[7,9],human:4,hunt:17,i:[0,1,4,9,11,13,17],id:[0,3,5,6,9,13,14],idea:0,ideal:0,ident:[0,16],identifi:[6,13],idx:0,ignor:1,illustr:0,imag:[4,5,15],immedi:13,impl:6,implement:[0,1,4,6,9,12,13],implicit:0,importantli:12,improv:4,includ:[0,1,6,9,12,17],inclus:[8,10],incom:[0,12,16],increment:0,inde:0,indent:14,independ:0,index:[0,2,12,14],indic:[0,4,6],indistinguish:1,individu:[6,10],ineffici:14,infer:6,inform:[0,1,4,7,9,13,16],infrastructur:[10,12],ingest:[10,12,13,15],inherit:0,init:18,init_db:[6,9],initi:[0,5,6,10,15],inject:0,injectrecu:0,injectreduc:0,inlin:17,inner:17,input:[0,1],insert:[0,6,9,15],insid:[0,4,17],insight:12,inspect:7,inspir:12,instad:9,instal:[9,10,18],instanc:[0,1,6,9,10,13,15,17],instanti:0,instead:[0,4,8,9,14,17],institut:12,instruct:[0,4,15],instrument:14,integ:0,integr:[4,10,12],intend:12,intent:12,interact:[0,6,9,12,13],interest:1,interfac:[12,15],intermedi:9,intern:0,internal_kei:0,intial:0,intro:0,introduc:0,introduct:0,introductori:0,introspect:13,invalid:[0,4,16],invalu:4,involv:[0,9],io:0,is_:13,is_accessible_bi:13,is_act:6,is_admin:6,is_authent:6,is_readable_bi:6,is_system_admin:6,isn:0,isnot:13,isol:9,issu:[4,18],item:[6,17],iter:13,its:[0,9,12,13],j:12,jabber:16,javascript:[0,4,9,12,17,18],job:[0,6],join:[6,9,13,14],join_model:6,join_tabl:6,joinedload:9,joinmodel:6,josh:16,joshua:12,jpg:5,js:[0,9,15],json:[0,1,4,9],json_util:9,jsonschema:0,jss:17,jsx:0,just:[0,11,17],kafka:12,kasliw:12,keep:[12,16],kei:[0,1,6,7,9,13,15],kept:4,keystrok:0,keywoard:0,keyword:[0,9],know:[0,4,9,11],known:6,kubernet:[7,12],kwarg:6,lambda:13,laptop:[10,12],larg:[12,17],larger:17,last:[4,6],last_modified_bi:13,last_nam:6,lat:5,later:[0,4,15],latest:[11,15],launch:[7,9,10,18],law09:12,layer:13,layout:17,lead:[0,9],leak:13,learn:0,least:[1,4,13],leav:17,left:[4,13,16],less:15,let:[0,1,4,11],level:[5,6,10,13],leverag:9,lg:17,li:0,libpq:15,librari:[0,12],licens:[8,10,12],light:[12,15],like:[0,4,10,14,16],likewis:16,line:[0,6,14,15],link:[0,12],lint:18,linux:[9,18],list:[0,1,4,5,6,9,12,13,17,18],listen:0,liter:0,live:[0,7,12,15],ll:[0,15],load:[5,7,9,12],load_demo_data:[5,7,10,11,15],load_env:9,load_seed_data:5,loaded_obj_kei:0,loader:10,local:[1,6,7,12,15],localhost:[0,1,7,10,15],locat:15,log:[0,7,9,10,12,15,16,18],logic:[0,6,8,9,12,13,17],login:15,lon:5,longer:[4,14],look:[0,1,4,14],lookout:14,loop:[0,14],lost:14,love:4,lowercas:0,ls:7,m:[11,12,17],machin:[1,12,15],made:[0,1,6,13,14,18],mag:1,mag_bp:1,mag_g:1,mag_rp:1,magg:1,mai:[0,1,4,6,7,10,14,15,16,17,18],main:[0,4,15],maintain:[0,6,10,12],make:[0,3,4,5,7,9,10,11,12,15,17,18],make_app:0,make_super_us:15,makestyl:17,manag:[0,6,10,11,12,18],mani:[0,4,6,8,12],manner:14,manual:[7,11,15,18],map:[0,6,13],mapper:[0,6],maria:0,marshal:12,master:[4,11],match:[0,1,3,5,13],materi:17,max_overflow:6,md:17,me:17,mean:[4,7,9,12],meant:[10,15],measur:16,mechan:16,media:17,medium:17,member:[4,6,12,18],membership:[13,18],mention:[0,16],menu:16,merg:4,mergeabl:4,mess:7,messag:[0,4,13,16],messagehandl:0,method:[0,1,6,14],microservic:12,middlewar:0,migrat:10,milli:1,million:10,mind:[4,6,12],minim:4,mirror:16,mismatch:16,miss:14,mission:16,mistak:14,mjd:5,ml:[5,12,15],mobil:10,mode:[0,7,9,13],model:[0,9,13,14],model_1:6,model_2:6,model_util:[9,15],modern:10,modif:9,modifi:[0,4,6,8,10,12,13,15,17],modul:[0,17],modular:12,moment:0,monitor:[0,15],moor:[10,12],more:[0,4,7,9,12,13,14,15],most:[13,14,16],mount:15,move:[4,14],mozilla:15,much:[0,4,7],mui:17,multi:[9,15],multipl:[1,6,13,17,18],must:[0,1,3,13],mxschmitt:9,mybutton:17,myconfig:15,name:[0,1,5,6,9,12,16],naul:12,navig:[0,10,15,16],necessari:14,necessarili:9,need:[0,4,6,7,9,11,12,13,14,15,16],neither:0,nest:17,network:15,never:2,newcommenttext:0,newcount:0,newli:0,newsourcelist:0,next:[7,12],nginx:[12,15],nice:14,nicknam:5,night:10,nist:1,nitpick:4,node:[0,15],nois:13,non:[0,1,6],none:[0,6,13],note:[0,7,10,13,14],notic:[4,9,14],notif:[0,6,16],notimplementederror:13,notion:1,novel:8,now:[0,4,5],npm:15,nullabl:0,number:[6,15],numer:4,o:0,oauth:[6,12],oauth_uid:6,obj:[0,6,9,13],obj_id:[1,5],obj_kei:0,object:[0,1,3,5,6,9,12,13,14],observ:[6,10],observing_run:6,observingrun:6,obtain:7,obviou:9,odditi:15,off:[11,16],offer:0,often:[0,9,13,14],ok:0,okai:4,older:6,omit:0,ommit:4,onc:[0,2,4,6,7,8,10,14,15],onchang:0,onclick:0,ondelet:0,one:[0,1,4,12,14,16,17],ones:[4,18],onli:[0,1,4,6,7,13,15,16,17,18],onto:[4,15],open:[4,8,10],oper:[0,4,6,9,13,17],opinion:4,optim:14,option:[0,6,13],or_:13,orcid:12,order:[0,9,14,15],org:[5,15],organ:0,origin:[0,1,4,6,14],original_action_typ:0,orm:[0,9,13,14],other:[0,4,8,9,10,12,15,16,17],otherwis:[0,7,13,15,18],our:[0,4,8,9,10,14,15],out:[0,4,6,9,11,12,14],outdat:0,outer:17,outerjoin:13,outlin:[0,4,11,14],output:[6,9,14],outsid:8,over:17,overrid:[6,13],overridden:[9,13],overwritten:2,own:[0,4],owner:[6,13],p60:5,p:[4,17],pace:4,packag:[0,1,9,12],pad:17,page:[0,1,4,10,12,16,17,18],palomar:[5,12],paper:[12,17],parallax:1,paramet:[6,9,13],parameter:17,part:[0,4,9,12,14,16],partial:10,particular:[0,6,13],pass:[0,1,4,6,8,10],password:6,past:3,path:[0,3,15],pattern:[0,9,13],payload:0,pdb:9,pend:11,per:[10,16],perform:[0,6,9,12,14,15,16,18],permiss:[6,9,14,15],persist:[6,7],person:[4,16],pg_ctl:15,pg_hba:15,phase:12,phone:6,phot:5,photometri:[5,6,13],piec:0,pip:[9,15,18],pipenv:15,place:[10,14,17],plai:[7,15],plan:[11,12],platform:[8,12,13],pleas:[0,1,4,8,10,15,17],plot:1,plural:0,plx:1,png:5,point:[1,13,14],pool:6,pool_recycl:6,pool_siz:6,popul:[5,10],popup:16,port:[6,15],portal:10,portion:[0,16],posit:17,possibl:[4,9,12,17],post:[0,3,5,13,16,18],postgr:[14,15],postgresql:[6,7,13,15],potenti:[12,13],practic:[8,10,13],practition:10,pre:[17,18],predefin:13,prefer:[4,6,17],premis:10,prepar:18,present:15,presum:11,pretti:14,prettier:4,prettierj:9,prevent:[6,13],previou:[0,4,17],primari:13,print:[9,14],printer:14,privat:10,privileg:[6,15],problem:[4,12],proc:12,process:[0,6,12,13,16],process_bind_param:6,process_result_valu:6,produc:14,product:7,profil:[1,16,18],program:5,program_a:5,programmat:[0,6],project:[4,10,12],promot:9,prop:0,properli:1,properti:[0,6,10],properties_and_mod:6,proprietari:10,protect:13,prototyp:12,provid:[0,4,6,12,13,16,17],proxi:9,ps:7,psql:14,ptf:12,pub:16,publish:12,pull:[4,7,8,10,13],pure:0,purpos:[0,4,8],push:[0,4,8,9,16],push_al:0,put:0,py:[0,5,9,13,14],pyscopg2:9,pytest:[4,9],python3:15,python:[0,4,6,9,12,14,18],python_typ:6,pythonpath:11,qualiti:4,queri:[0,6,9,10,12,13,17],query_accessible_row:[6,13,14],query_or_query_gener:6,query_records_accessible_bi:13,queryinprogress:0,quick:[12,14],quickest:14,quickli:4,r:[0,9],rais:[6,13],raise_if_non:13,random:0,rapid:4,rare:14,rather:0,ratio:13,raw:14,re:[0,14,18],react:[8,12],reactdom:0,reactj:0,read:[0,5,6,13],readabl:6,real:[0,12,16],realli:14,reason:16,rebas:4,recap:0,receiv:[0,6,16],recent:3,recogn:1,recommend:[4,15],record:[0,6,9,13],recov:9,recurs:10,red:17,redoc:2,redshift:12,reduc:0,redux:[8,9,12],refer:[0,6,17],reflect:[0,15],reflog:4,reformat:[4,9,18],refresh:[0,9],refresh_sourc:0,regard:14,regardless:12,regex:0,regular:0,reject:4,relat:[0,6,9,13],relationship:[9,13],relationship_chain:6,relationship_nam:6,releas:[1,3,4,8,10,12,15],relev:[0,9,11],reli:16,rem:17,remedi:15,rememb:4,remot:4,remov:[1,7],render:[0,1,4,12,17],rendit:12,repeat:9,replac:[8,15],report:14,repositori:[4,15],repres:[6,16],reproduc:4,request:[0,1,4,6,8,9,10,12,13],requesthandl:0,requestresult:0,requir:[4,9,13,15],requisit:[6,13],reset:[0,4],resolv:4,resourc:[0,18],respect:[0,14],respons:[0,1],restart:15,restrict:6,result:[0,4,6,9,11,16,17],resultfromsomeapical:0,retain:4,retriev:[0,6,13],reus:[8,10],revers:6,review:[8,10,11],revis:11,rich:12,right:[13,16],robust:8,role:[6,9,12],role_id:6,roleacl:6,rollback:[9,13],root:[0,17],rout:[0,12],router:0,row:[0,6,13,14],rp:1,rule:14,run:[0,1,4,6,7,9,10,11,12,14,15,18],run_product:7,run_test:[0,9],runner:9,s:[0,1,6,9,12,13,14,15],sa:[0,13],safe:9,same:[0,1,4,7,9,12,16,17,18],sampl:[10,15],satisfi:4,save:[5,6],saved_sourc:6,scaffold:12,scalabl:[8,13],scale:[10,12],scan:14,schema:[1,10,11,14],scienc:12,scientif:12,scikit:4,scipi:12,scope:[0,9],scratch:[7,16],screen:[0,15,17],script:[3,4,6,12],search:[1,10],second:[0,6],secondari:9,secret:15,section:[0,6,14,15,16,17],secur:[12,13],see:[0,1,4,5,7,8,9,10,11,13,15,16,17],select:14,select_from:13,selector:17,selenium:[0,4],self:[0,13,15],send:[0,16],send_kei:0,sensit:13,sent:[6,14,16],separ:[0,4,6,9,15],seq:14,sequenti:4,seri:[12,14],serial:6,serv:[0,9,10,13],server:[7,9,10,12,15],servic:[1,7,9,11,15],session:[0,9,13],set:[0,6,7,9,13,15,18],set_trac:9,setnewcommenttext:0,settl:17,setup:[7,9,10],sever:[4,9,15,17],sheet:17,shortcut:9,shorter:4,shorthand:[0,4],shortli:0,should:[0,1,4,6,8,9,11,14,15,16,17],show:[1,4,8,10,14,15],shown:[8,16],side:[4,14,15,16],signal:13,signatur:0,similar:[4,6],similarli:14,simpl:[0,17],simpli:[0,4],simplifi:[0,9],singl:[0,1,4,9,13],single_user_group:6,sky:12,skycam_link:5,skyport:[1,4,5,6,7,8,9,12,13,14,15,17,18],skyportal_dbdata:7,skyportal_env:[7,15],skyportal_test:15,skyportal_web_1:7,slack:10,slightli:0,slow:14,slugifi:6,slugifiedstr:6,sm:17,small:[4,17],smallest:0,snr:13,so:[0,1,4,5,8,12,14,16,17],socket:0,sofia:0,softer:4,softwar:[10,15],some:[0,4,7,9,14,15,18],some_request_typ:0,somehandl:0,someth:14,sometim:[4,10,14],somewher:15,sort:14,sort_key_funct:6,sourc:[0,1,3,6,7,8,10,12,16,18],source_notif:6,sourceid:3,sourcelist:0,sp_integr:16,space:[17,18],span:[4,17],specif:[1,9,12,13,14,18],specifi:[0,6,13,14,16,17],specific_test:9,spectra:[3,6,12,13,18],spectrum:[3,13],spectrumid:3,speed:14,spend:4,spin:7,split:[4,17],spot:14,spread:[0,17],sql:[0,6,14],sqlalchemi:[0,9,13],sqlalchemymodelfactori:9,sqltype:6,squash:4,ssh:9,stage:18,stai:0,stamp:11,stand:17,standalon:10,standard:[8,9,10],start:[0,11,14,15,16],state:[6,9,11,12,13],statement:[0,14],statu:[0,1,6,13],stellar:1,step:[4,7,9,14],stil:4,still:[0,1,4],stop:[9,11,16],store:[0,5,7,10,12],str:6,stream:[6,10,12,13],stream_id:13,streamlin:4,streamus:13,string:[0,1,6],strong:10,structur:[0,6,9],stub:2,studi:10,style:[9,10],sub:[12,16],subclass:[0,6,9,13],subfactori:9,subject:13,submiss:0,submit:[0,4,8,10],submit_test_com:0,submitcom:0,submodul:[0,10],subprocess:6,subqueri:14,subset:[9,18],substant:16,subsystem:15,subtl:9,success:[0,13],successfulli:[0,13],sudo:[9,15],suggest:4,suit:[0,8,9,10,12,15],summari:10,supervisor:15,suppi:0,suppli:[0,3],support:[1,12,17],sure:[0,13,15],survei:[10,12],swinbank14:12,sync:0,synchron:[0,10],synopt:12,syntax:[0,14],system:[1,4,6,10,12,13,15],t:[0,4,10],tabl:[0,6,7,9,13,14],table1:6,table2:6,table_a:14,table_b:14,table_nam:14,tablet:10,tag:[0,12],tail:18,take:[0,4,9,13,17],taken:9,talk:4,target:[0,1,6,13,17],taxonomi:13,tcp:15,team:[4,8,10],tear:9,teardown:9,technolog:[0,8],telescop:[5,12],tell:[0,11],termin:[0,10],test:[0,5,8,10,12,18],test_:9,test_com:0,test_conf:9,test_fil:9,test_frontend:9,test_headless:9,test_test_com:0,test_text:0,test_us:9,test_user_profile_fetch:9,testadmin:5,testcom:0,testcommenthandl:0,testcommentinput:0,testcommentsubmitbutton:0,testid:0,testus:15,text:0,than:[0,4,6],thank:[10,12],thei:[0,4,6,8,9,10,13,16],them:[0,4,7,9,14,15,18],theme:17,therefor:4,thi:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18],thing:9,those:[0,5,14],thousand:10,three:0,through:[0,1,5,9,13,14,15,18],thu:14,thumbnail:5,thunk:0,time:[0,4,6,7,10,12,17,18],tip:14,tire:10,titl:[4,12],tmate:9,to_dict:[6,9],to_json:9,togeth:0,toggl:[12,16],token:[0,1,6,12,13],token_group:6,token_id:6,tokenacl:6,toler:16,took:[0,14],tool:[5,9,17,18],toolkit:0,top:[5,12,16,17],topic:4,tornado:[0,12],toward:14,traceabl:10,track:[0,4,13],transact:[6,13],transform:6,transmit:16,travi:12,tree:0,trigger:[0,13],troubl:15,trust:[15,16],ttype:5,tupl:0,turn:[0,4],tutori:0,two:[0,4,7,12,14,17,18],type:[0,4,6,12,13,16,17],typeengin:6,typeerror:6,typic:[0,12,15],u:9,ubuntu:15,ui:[0,12,17],uid:6,ul:0,ultim:12,unauthor:16,uncontroversi:4,undefin:1,under:[0,4,8,10,11,12],underli:[3,6,8,14],underscor:1,understand:[14,17],unfamiliar:0,unintend:9,uniqu:[6,15,16],unit:1,univers:12,unless:4,unlik:16,unsuccess:1,unsupport:8,until:[4,6],up:[0,6,7,9,14,17,18],upcom:10,updat:[0,4,6,9,13,15,16],update_sourc:0,updatecount:0,updatesourc:0,upgrad:[9,11],upload:[6,18],upon:[0,6,9,11,12,16],upstream:4,url:[0,1,6,16],us:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],usag:[0,9,10],usedispatch:0,useeffect:0,usemediaqueri:17,user:[0,1,5,6,9,12,13],user_id:[0,6,13],user_id_from_user_or_token:6,user_model:6,user_or_token:[6,13],user_or_token_accessible_group:6,user_or_token_accessible_stream:6,useraccesscontrol:[6,13],useracl:6,usernam:[5,6],userrol:6,useselector:0,usest:0,usestyl:17,usr:15,utc:6,util:[0,9],ux:12,v2:9,v:15,valid:[0,1,6],valu:[0,1,5,6,14,15,17],van:12,vanilla:11,vari:12,variabl:[0,4,15],variou:[0,9,12],ve:[0,2,4,11],vector:13,veri:[0,7],verifi:[13,16],verify_and_commit:13,version:[0,4,11,12,14,15],via:[0,3,6,7,9,12,14,17],view:[0,6,12],viewonlyus:5,violat:13,virtual:15,virtualenv:15,visibl:18,visual:[6,12],volum:7,wa:[0,1,3,6,12,13,15],wai:[0,3,4,6,7,9,13,14,17,18],wait:0,wait_for_xpath:0,walk:0,walt:12,want:[0,10,13,14,15],warrant:0,watch:9,we:[0,1,2,3,4,7,8,9,10,12,15,16,17],web:[0,7,9,10,12,17,18],webhook:16,webserv:9,websit:10,websocket:12,welcom:[0,12],well:0,were:[8,9,10,13],what:[0,4,14],whatev:[0,15],when:[0,3,4,5,6,7,9,10,13,14,17,18],whenev:0,where:[0,4,13,14,15],wherea:4,wherev:0,whether:[0,4,6,14],which:[0,4,5,6,7,9,10,12,13,14,17,18],who:[0,6,13,16],whose:0,wide:[0,15],window:15,wish:16,within:[0,6,9,13,14],without:[7,11,12,14,18],wonder:14,word:17,work:[0,1,9,10,16],workflow:9,workspac:16,world:0,would:[0,1,4,5,6,7,14,17],wrap:0,write:[4,9,17],written:[0,8,14],wrong:3,x:[4,11,14],x_1:14,xfvb:9,xl:17,xmpp:16,xs:17,xvfb:9,xxxx:15,yam:1,yaml:[0,5,7,9,11,15],yield:[9,14],you:[0,4,7,8,9,10,11,13,14,15,17,18],your:[0,1,9,10,11,14,15],yourself:[10,14],zwicki:12},titles:["Adding new features","Advanced usage","API","Comment URL migration:","How to Contribute","Data loader","Database Schema","Deployment","System Architecture","Developer notes","SkyPortal","Database migrations","Summary","Access controls","Analyzing database queries","Setup","Slack Integration","Styling components","Usage"],titleterms:{"class":13,"do":17,"import":18,"new":[0,13],One:16,access:13,acknowledg:[10,12],action:9,ad:[0,7,18],addit:15,admin:16,administr:15,advanc:1,an:[1,13,15],analyz:14,api:[2,6,13],app:16,appli:11,architectur:[8,12,13],authent:15,back:0,base:15,basic:0,being:13,bind:13,bookkeep:0,box:17,bug:4,build:7,chang:4,check:13,code:[4,18],color:1,comment:3,commit:9,compon:[0,17],concept:0,conclus:12,configur:15,connect:16,contain:7,contribut:[4,10],control:13,conveni:13,creat:[13,15],creation:[0,16],data:[0,1,5,7,15],databas:[6,9,11,14],debian:15,debug:9,depend:[4,15],deploy:7,describ:4,design:[13,17],develop:9,diagram:[1,6],docker:[7,9],document:6,don:17,download:15,edit:0,element:0,end:0,enforc:13,entiti:6,environ:15,exampl:13,explain:14,featur:0,file:[0,5],fixtur:9,flow:0,focus:4,format:18,front:0,further:13,futur:12,gener:[1,11],git:4,github:9,grid:17,group:18,guid:10,guidelin:4,handl:7,handler:13,hook:9,how:4,hr:1,imag:[7,9],includ:4,instal:15,integr:16,introduct:13,larg:4,launch:15,licens:4,line:1,linter:18,linux:15,loader:5,maco:15,magnitud:1,makefil:18,method:13,migrat:[3,11],model:6,note:[9,16],overview:0,permiss:[13,18],polici:13,post:1,postgresql:14,pr:4,pre:9,problem:7,process:4,prop:17,python:15,queri:14,quick:10,react:0,redux:0,refer:[5,12],relationship:6,reliabl:16,report:4,respons:17,restrict:13,review:4,rl:13,role:18,s:17,schema:6,script:11,secur:16,set:[4,11,16],setup:15,size:17,skyport:[0,10,16],slack:16,sourc:15,spectroscop:1,sqlalchemi:[6,14],start:[7,10],state:0,step:16,stop:7,style:[4,17],summari:[0,12],system:[8,17],target:18,test:[4,7,9,15],time:16,tip:4,troubleshoot:15,ts:17,up:[11,16],url:3,usag:[1,18],user:[10,15,16,18],veri:4,websocket:0,work:[4,12],wsl:15,your:4}})
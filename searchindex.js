Search.setIndex({docnames:["adding_features","api","contributing","data_loader","database","deploy","design","dev","index","migrations","papers/joss/paper","permissions","setup","styling","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["adding_features.md","api.rst","contributing.md","data_loader.md","database.rst","deploy.md","design.md","dev.md","index.rst","migrations.md","papers/joss/paper.md","permissions.md","setup.md","styling.md","usage.md"],objects:{"baselayer.app":{models:[4,0,0,"-"]},"baselayer.app.models":{ACL:[4,1,1,""],AccessibleIfRelatedRowsAreAccessible:[4,1,1,""],AccessibleIfUserMatches:[4,1,1,""],ComposedAccessControl:[4,1,1,""],CronJobRun:[4,1,1,""],JoinModel:[4,1,1,""],Public:[4,1,1,""],Restricted:[4,1,1,""],Role:[4,1,1,""],RoleACL:[4,1,1,""],SlugifiedStr:[4,1,1,""],Token:[4,1,1,""],TokenACL:[4,1,1,""],User:[4,1,1,""],UserACL:[4,1,1,""],UserAccessControl:[4,1,1,""],UserRole:[4,1,1,""],join_model:[4,4,1,""]},"baselayer.app.models.ACL":{created_at:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""]},"baselayer.app.models.AccessibleIfRelatedRowsAreAccessible":{query_accessible_rows:[4,3,1,""]},"baselayer.app.models.AccessibleIfUserMatches":{query_accessible_rows:[4,3,1,""],relationship_names:[4,3,1,""]},"baselayer.app.models.ComposedAccessControl":{query_accessible_rows:[4,3,1,""]},"baselayer.app.models.CronJobRun":{created_at:[4,2,1,""],exit_status:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],output:[4,2,1,""],script:[4,2,1,""]},"baselayer.app.models.Public":{query_accessible_rows:[4,3,1,""]},"baselayer.app.models.Restricted":{query_accessible_rows:[4,3,1,""]},"baselayer.app.models.Role":{acls:[4,2,1,""],created_at:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],users:[4,2,1,""]},"baselayer.app.models.RoleACL":{created_at:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""]},"baselayer.app.models.SlugifiedStr":{impl:[4,2,1,""],process_bind_param:[4,3,1,""],process_result_value:[4,3,1,""]},"baselayer.app.models.Token":{accessible_groups:[4,3,1,""],accessible_streams:[4,3,1,""],acls:[4,2,1,""],created_at:[4,2,1,""],created_by:[4,2,1,""],created_by_id:[4,2,1,""],groups:[4,3,1,""],id:[4,2,1,""],is_readable_by:[4,3,1,""],modified:[4,2,1,""],name:[4,2,1,""]},"baselayer.app.models.TokenACL":{created_at:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""]},"baselayer.app.models.User":{accessible_groups:[4,3,1,""],accessible_streams:[4,3,1,""],acls:[4,2,1,""],assignments:[4,2,1,""],contact_email:[4,2,1,""],contact_phone:[4,2,1,""],created_at:[4,2,1,""],first_name:[4,2,1,""],followup_requests:[4,2,1,""],gravatar_url:[4,3,1,""],group_admission_requests:[4,2,1,""],groups:[4,2,1,""],id:[4,2,1,""],is_active:[4,3,1,""],is_authenticated:[4,3,1,""],last_name:[4,2,1,""],listings:[4,2,1,""],modified:[4,2,1,""],notifications:[4,2,1,""],oauth_uid:[4,2,1,""],observing_runs:[4,2,1,""],permissions:[4,3,1,""],photometry:[4,2,1,""],preferences:[4,2,1,""],roles:[4,2,1,""],source_notifications:[4,2,1,""],sources:[4,2,1,""],spectra:[4,2,1,""],streams:[4,2,1,""],tokens:[4,2,1,""],transactions:[4,2,1,""],user_model:[4,3,1,""],username:[4,2,1,""]},"baselayer.app.models.UserACL":{created_at:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""]},"baselayer.app.models.UserAccessControl":{check_cls_for_attributes:[4,3,1,""],query_accessible_rows:[4,3,1,""],user_id_from_user_or_token:[4,3,1,""]},"baselayer.app.models.UserRole":{created_at:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""]},"skyportal.models":{AccessibleIfGroupUserIsAdminAndUserMatches:[4,1,1,""],Allocation:[4,1,1,""],Annotation:[4,1,1,""],ArrayOfEnum:[4,1,1,""],Candidate:[4,1,1,""],ClassicalAssignment:[4,1,1,""],Classification:[4,1,1,""],Comment:[4,1,1,""],Filter:[4,1,1,""],FollowupRequest:[4,1,1,""],Group:[4,1,1,""],GroupAdmissionRequest:[4,1,1,""],Instrument:[4,1,1,""],NumpyArray:[4,1,1,""],Obj:[4,1,1,""],ObservingRun:[4,1,1,""],Photometry:[4,1,1,""],SourceView:[4,1,1,""],Spectrum:[4,1,1,""],Stream:[4,1,1,""],Taxonomy:[4,1,1,""],Telescope:[4,1,1,""],Thumbnail:[4,1,1,""],candidate_is_readable_by:[4,4,1,""],get_candidate_if_readable_by:[4,4,1,""],get_obj_annotations_readable_by:[4,4,1,""],get_obj_classifications_readable_by:[4,4,1,""],get_obj_comments_readable_by:[4,4,1,""],get_obj_if_readable_by:[4,4,1,""],get_photometry_readable_by_user:[4,4,1,""],get_source_if_readable_by:[4,4,1,""],get_spectra_readable_by:[4,4,1,""],get_taxonomy_usable_by_user:[4,4,1,""],is_modifiable_by:[4,4,1,""],is_readable_by:[4,4,1,""],source_is_readable_by:[4,4,1,""],token_groups:[4,2,1,""],user_or_token_accessible_groups:[4,2,1,""],user_or_token_accessible_streams:[4,2,1,""]},"skyportal.models.AccessibleIfGroupUserIsAdminAndUserMatches":{query_accessible_rows:[4,3,1,""]},"skyportal.models.Allocation":{created_at:[4,2,1,""],end_date:[4,2,1,""],group:[4,2,1,""],group_id:[4,2,1,""],hours_allocated:[4,2,1,""],id:[4,2,1,""],instrument:[4,2,1,""],instrument_id:[4,2,1,""],modified:[4,2,1,""],pi:[4,2,1,""],proposal_id:[4,2,1,""],requests:[4,2,1,""],start_date:[4,2,1,""]},"skyportal.models.Annotation":{author:[4,2,1,""],author_id:[4,2,1,""],created_at:[4,2,1,""],data:[4,2,1,""],get_if_readable_by:[4,3,1,""],groups:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],origin:[4,2,1,""]},"skyportal.models.ArrayOfEnum":{bind_expression:[4,3,1,""],result_processor:[4,3,1,""]},"skyportal.models.Candidate":{created_at:[4,2,1,""],filter:[4,2,1,""],filter_id:[4,2,1,""],get_obj_if_readable_by:[4,3,1,""],id:[4,2,1,""],is_readable_by:[4,3,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],passed_at:[4,2,1,""],passing_alert_id:[4,2,1,""],uploader_id:[4,2,1,""]},"skyportal.models.ClassicalAssignment":{comment:[4,2,1,""],created_at:[4,2,1,""],id:[4,2,1,""],instrument:[4,2,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],photometry:[4,2,1,""],priority:[4,2,1,""],requester:[4,2,1,""],requester_id:[4,2,1,""],rise_time:[4,3,1,""],run:[4,2,1,""],run_id:[4,2,1,""],set_time:[4,3,1,""],spectra:[4,2,1,""],status:[4,2,1,""]},"skyportal.models.Classification":{author:[4,2,1,""],author_id:[4,2,1,""],author_name:[4,2,1,""],classification:[4,2,1,""],created_at:[4,2,1,""],groups:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],probability:[4,2,1,""],taxonomy:[4,2,1,""],taxonomy_id:[4,2,1,""]},"skyportal.models.Comment":{attachment_bytes:[4,2,1,""],attachment_name:[4,2,1,""],author:[4,2,1,""],author_id:[4,2,1,""],created_at:[4,2,1,""],ctype:[4,2,1,""],get_if_readable_by:[4,3,1,""],groups:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],origin:[4,2,1,""],text:[4,2,1,""]},"skyportal.models.Filter":{candidates:[4,2,1,""],created_at:[4,2,1,""],group:[4,2,1,""],group_id:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],name:[4,2,1,""],stream:[4,2,1,""],stream_id:[4,2,1,""]},"skyportal.models.FollowupRequest":{created_at:[4,2,1,""],id:[4,2,1,""],is_readable_by:[4,3,1,""],last_modified_by:[4,2,1,""],last_modified_by_id:[4,2,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],payload:[4,2,1,""],requester:[4,2,1,""],requester_id:[4,2,1,""],status:[4,2,1,""],target_groups:[4,2,1,""]},"skyportal.models.Group":{"private":[4,2,1,""],admission_requests:[4,2,1,""],allocations:[4,2,1,""],created_at:[4,2,1,""],filters:[4,2,1,""],group_users:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],name:[4,2,1,""],nickname:[4,2,1,""],observing_runs:[4,2,1,""],photometry:[4,2,1,""],single_user_group:[4,2,1,""],spectra:[4,2,1,""],streams:[4,2,1,""],users:[4,2,1,""]},"skyportal.models.GroupAdmissionRequest":{created_at:[4,2,1,""],group:[4,2,1,""],group_id:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],status:[4,2,1,""],user:[4,2,1,""],user_id:[4,2,1,""]},"skyportal.models.Instrument":{api_classname:[4,2,1,""],band:[4,2,1,""],created_at:[4,2,1,""],does_imaging:[4,3,1,""],does_spectroscopy:[4,3,1,""],filters:[4,2,1,""],id:[4,2,1,""],listener_classname:[4,2,1,""],modified:[4,2,1,""],name:[4,2,1,""],observing_runs:[4,2,1,""],photometry:[4,2,1,""],spectra:[4,2,1,""],telescope:[4,2,1,""],telescope_id:[4,2,1,""],type:[4,2,1,""]},"skyportal.models.NumpyArray":{process_result_value:[4,3,1,""]},"skyportal.models.Obj":{"transient":[4,2,1,""],add_linked_thumbnails:[4,3,1,""],airmass:[4,3,1,""],altdata:[4,2,1,""],altitude:[4,3,1,""],annotations:[4,2,1,""],assignments:[4,2,1,""],candidates:[4,2,1,""],classifications:[4,2,1,""],comments:[4,2,1,""],created_at:[4,2,1,""],dec_dis:[4,2,1,""],dec_err:[4,2,1,""],desi_dr8_url:[4,3,1,""],detect_photometry_count:[4,2,1,""],dist_nearest_source:[4,2,1,""],dm:[4,3,1,""],e_mag_nearest_source:[4,2,1,""],followup_requests:[4,2,1,""],gal_lat_deg:[4,3,1,""],gal_lon_deg:[4,3,1,""],get_annotations_readable_by:[4,3,1,""],get_classifications_readable_by:[4,3,1,""],get_comments_readable_by:[4,3,1,""],get_if_readable_by:[4,3,1,""],get_photometry_readable_by_user:[4,3,1,""],get_spectra_readable_by:[4,3,1,""],id:[4,2,1,""],internal_key:[4,2,1,""],is_roid:[4,2,1,""],last_detected_at:[4,2,1,""],last_detected_mag:[4,2,1,""],luminosity_distance:[4,3,1,""],mag_nearest_source:[4,2,1,""],modified:[4,2,1,""],obj_notifications:[4,2,1,""],offset:[4,2,1,""],origin:[4,2,1,""],panstarrs_url:[4,3,1,""],peak_detected_at:[4,2,1,""],peak_detected_mag:[4,2,1,""],photometry:[4,2,1,""],ra_dis:[4,2,1,""],ra_err:[4,2,1,""],redshift:[4,2,1,""],redshift_history:[4,2,1,""],score:[4,2,1,""],sdss_url:[4,3,1,""],sources:[4,2,1,""],spectra:[4,2,1,""],target:[4,3,1,""],thumbnails:[4,2,1,""],varstar:[4,2,1,""]},"skyportal.models.ObservingRun":{assignments:[4,2,1,""],calendar_date:[4,2,1,""],created_at:[4,2,1,""],group:[4,2,1,""],group_id:[4,2,1,""],id:[4,2,1,""],instrument:[4,2,1,""],instrument_id:[4,2,1,""],modified:[4,2,1,""],observers:[4,2,1,""],owner:[4,2,1,""],owner_id:[4,2,1,""],pi:[4,2,1,""],rise_time:[4,3,1,""],set_time:[4,3,1,""],sources:[4,2,1,""]},"skyportal.models.Photometry":{altdata:[4,2,1,""],created_at:[4,2,1,""],dec_unc:[4,2,1,""],e_mag:[4,2,1,""],filter:[4,2,1,""],flux:[4,2,1,""],fluxerr:[4,2,1,""],groups:[4,2,1,""],id:[4,2,1,""],instrument:[4,2,1,""],instrument_id:[4,2,1,""],is_modifiable_by:[4,3,1,""],iso:[4,2,1,""],jd:[4,2,1,""],mag:[4,2,1,""],mjd:[4,2,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],origin:[4,2,1,""],original_user_data:[4,2,1,""],owner:[4,2,1,""],owner_id:[4,2,1,""],ra_unc:[4,2,1,""],snr:[4,2,1,""],upload_id:[4,2,1,""]},"skyportal.models.SourceView":{created_at:[4,2,1,""],id:[4,2,1,""],is_token:[4,2,1,""],modified:[4,2,1,""],obj_id:[4,2,1,""],username_or_token_id:[4,2,1,""]},"skyportal.models.Spectrum":{altdata:[4,2,1,""],created_at:[4,2,1,""],errors:[4,2,1,""],fluxes:[4,2,1,""],from_ascii:[4,3,1,""],groups:[4,2,1,""],id:[4,2,1,""],instrument:[4,2,1,""],instrument_id:[4,2,1,""],is_modifiable_by:[4,3,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],observed_at:[4,2,1,""],observers:[4,2,1,""],origin:[4,2,1,""],original_file_filename:[4,2,1,""],original_file_string:[4,2,1,""],owner:[4,2,1,""],owner_id:[4,2,1,""],reducers:[4,2,1,""],wavelengths:[4,2,1,""]},"skyportal.models.Stream":{altdata:[4,2,1,""],created_at:[4,2,1,""],filters:[4,2,1,""],groups:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],name:[4,2,1,""],users:[4,2,1,""]},"skyportal.models.Taxonomy":{classifications:[4,2,1,""],created_at:[4,2,1,""],get_taxonomy_usable_by_user:[4,3,1,""],groups:[4,2,1,""],hierarchy:[4,2,1,""],id:[4,2,1,""],isLatest:[4,2,1,""],modified:[4,2,1,""],name:[4,2,1,""],provenance:[4,2,1,""],version:[4,2,1,""]},"skyportal.models.Telescope":{created_at:[4,2,1,""],diameter:[4,2,1,""],elevation:[4,2,1,""],fixed_location:[4,2,1,""],id:[4,2,1,""],instruments:[4,2,1,""],lat:[4,2,1,""],lon:[4,2,1,""],modified:[4,2,1,""],name:[4,2,1,""],next_sunrise:[4,3,1,""],next_sunset:[4,3,1,""],next_twilight_evening_astronomical:[4,3,1,""],next_twilight_evening_nautical:[4,3,1,""],next_twilight_morning_astronomical:[4,3,1,""],next_twilight_morning_nautical:[4,3,1,""],nickname:[4,2,1,""],observer:[4,3,1,""],robotic:[4,2,1,""],skycam_link:[4,2,1,""],weather:[4,2,1,""],weather_link:[4,2,1,""],weather_retrieved_at:[4,2,1,""]},"skyportal.models.Thumbnail":{created_at:[4,2,1,""],file_uri:[4,2,1,""],id:[4,2,1,""],modified:[4,2,1,""],obj:[4,2,1,""],obj_id:[4,2,1,""],origin:[4,2,1,""],public_url:[4,2,1,""],type:[4,2,1,""]},skyportal:{models:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"0000":10,"0001":10,"0002":10,"0410":10,"0b2":12,"0px":13,"116":3,"127":12,"1280px":13,"14gqr":[0,3],"14gqr_new":3,"14gqr_unsaved_copi":3,"1870":3,"1891":10,"1920px":13,"1rem":13,"200":4,"2002":4,"2016":10,"2019":10,"216x":10,"2rem":13,"3633675":3,"400":[0,2,11],"404":0,"5000":[0,8,12],"5432":12,"5780":4,"599":2,"5rem":13,"600px":13,"644":2,"7183":10,"7494":4,"7777":10,"8361345":3,"9000":5,"9276":10,"960px":13,"\u00b5jy":4,"abstract":8,"boolean":4,"break":0,"byte":3,"case":[0,2,4,8,10,11,13],"catch":7,"class":[0,4,7,13],"const":[0,13],"default":[0,4,10,11,12],"export":0,"final":[0,10],"float":4,"function":[0,2,4,7,10],"import":[0,4,7,11,12,13],"int":4,"long":[0,2],"new":[2,3,4,7,8,12,14],"null":4,"public":[4,8,11,12],"return":[0,2,4,7,11,13],"short":4,"st\u00e9fan":10,"static":[0,4],"switch":[0,2],"transient":[4,10],"true":[0,4,11],"try":[0,12],"var":12,"while":[2,12,13],Adding:8,But:[4,10],For:[0,2,4,7,10,13],IDs:11,One:4,That:0,The:[0,2,3,4,5,6,7,8,10,11,12,13,14],Then:[0,8],There:13,These:[0,7,11,12],Use:[11,13],Uses:4,With:[0,11],__init__:0,__str__:7,__subclasses__:4,_fail:0,_id:4,_ok:0,abbrevi:4,abil:10,abl:[10,11],about:[0,2,4,7],abov:[0,4,7,11,13,14],accept:[2,4],access:[0,2,4,7,8,10,14],access_control:4,accesserror:[4,11],accessible_by_own:11,accessible_group:4,accessible_stream:4,accessible_to_own:11,accessible_to_owner_or_last_modified_bi:11,accessibleifgroupuserisadminandusermatch:4,accessibleifrelatedrowsareaccess:4,accessibleifusermatch:[4,11],accompani:2,accomplish:0,accordingli:0,account:4,acl:[4,7,10,11,14],acl_id:4,acquir:4,across:2,act:1,action:[0,2,14],action_typ:0,actiontyp:0,activ:[0,4,5,10,12],actual:0,add:[0,2,4,5,7,10,11,12,14],add_linked_thumbnail:4,add_ps1_thumbnail:4,added:[0,2,7],adding:[0,4,11,12],addit:[0,4],address:[2,12],adequ:2,adjust:10,admin:[3,4,8,11,14],administr:10,admiss:4,admission_request:4,advantag:11,affect:5,affili:10,after:[0,4,7],against:[4,11],aggreg:4,agre:2,aid:10,aim:[2,10],airmass:4,alemb:9,alert:4,alia:4,alik:2,all:[0,2,4,5,6,7,10,11,13,14],allig:0,alloc:4,allocation_id:4,allow:[0,2,4,7,8,11,12,14],allski:3,allskycurrentimag:3,along:4,alreadi:[0,4],also:[0,2,3,4,6,7,8,10,11,12,13,14],alt:4,altaz:4,altdata:4,altern:[0,4],although:11,altitud:4,alwai:[0,4],amend:2,analogu:4,analysi:10,analyz:10,and_:11,angstrom:4,angular_diameter_dist:4,ani:[0,2,4,7,11,12],annot:[4,10],annotation_list:4,anoth:[0,2,8],anyon:[4,11,12],anyth:[0,4],api:[0,2,3,7,8,10,13],api_class:4,api_classnam:4,app:[0,4,7,11,12,14],app_serv:0,appear:0,append:0,appli:[0,5,6,11],applic:[0,4,5,6,7,8,10,14],appreci:2,approach:4,appropri:10,apt:[7,12],arbitrari:[4,11],arbitrarili:11,architectur:8,arcsec:4,arg:4,argu:2,argument:[0,4],arien:10,arrai:[0,4],arrayofenum:4,arrow:0,arrowtyp:4,art:2,as_tupl:4,ascens:4,ascii:4,ask:2,assign:[0,4],assignment_id:4,associ:[0,4,7,10],assum:[0,4,12],astronom:[4,8,10,11],astronomi:10,astrophys:4,astropi:4,astroplan:4,async:0,asynchron:[0,8],atmospher:4,attach:[4,7],attachment_byt:4,attachment_nam:4,attempt:[4,6,14],attr:4,attribut:[0,3,4,7,11],audit:8,augment:2,auth:12,auth_or_token:0,authent:[0,4,10],author:[2,4,7,10],author_id:4,author_nam:4,auto:4,autogener:9,autom:10,automat:[0,11,12,13,14],avail:13,avoid:7,await:0,b64:3,back:[4,6,8],backend:[4,7,8,10,11],backgroundcolor:13,band:[4,10],base:[0,2,4,7,10,11],base_url:0,basehandl:0,baselay:[0,4,7,10,11],bash:5,batch:4,becaus:[0,2,10,13],becom:[3,4,6],become_us:[0,8,12],been:[0,2,4,8],befor:[0,2,4,6,7,8,11,12],behav:0,behavior:[0,4,7],being:[0,2,4,7,10],belong:[4,14],below:[0,2,4,11,12,13],below_horizon:4,benefit:[2,6,8],berkelei:10,best:[4,10,11],betti:[8,10],between:[10,13],bianca:3,bib:10,bibliographi:10,bin:[5,12],binari:[4,12],bind:4,bind_express:4,bind_processor:4,bindparamet:4,bindvalu:4,bit:0,bitwis:11,black:[2,7],blank:13,bloat:7,block:0,bloom:10,blue:13,bodi:[0,4],bokeh:10,bool:4,bool_and:11,border:13,both:[0,4,5,11],bound:4,boundari:6,brace:0,branch:[0,2],breakpoint:13,brett:10,brew:12,brief:0,bring:11,broadband:4,broker:10,brows:5,browser:[0,7,8,10,12,14],bsd:[2,6,8,10],bug:7,build:[0,6,7,8,10,12],built:[0,1,6,8,13],bulk:[4,11],bundl:0,button:[0,2,13],bypass:0,cach:0,calcul:4,calendar:4,calendar_d:4,calendar_noon:4,calibr:4,california:10,call:[0,4,5,7,10,11],callabl:4,callback:0,caltech:3,camera:4,can:[0,2,3,4,5,7,8,10,11,12,13,14],candid:4,candidate_is_readable_bi:4,cannot:13,capabl:[0,4],capit:0,captur:0,care:7,cartesian:4,cascad:[0,7],caught:0,caus:11,cell:13,center:4,certain:2,cesium:[3,10,12],cfg:7,chain:4,chanc:2,chang:[0,6,7,8,9,10,11,12,14],chat:10,cheap:0,check:[0,4,7],check_cls_for_attribut:4,checker:11,checkmark:2,child:7,children:7,choos:2,chosen:10,chunk:14,classic:4,classicalassign:4,classif:[4,11],classifi:4,classification_list:4,classmethod:4,classnam:13,clean:10,clear:14,click:[0,2,13,14],click_xpath:0,clone:[2,8,12],close:8,cloud:[8,10],cls:[4,11],clunki:0,cluster:8,code:[0,7,8,11],coerc:4,collabor:[8,10],collect:[4,11,14],color:[10,13],coltyp:4,column:[0,3,4,11,13],column_1:4,column_2:4,com:[2,8,12],combin:[4,6],come:[0,2],command:[4,7,12],comment:[0,2,4,7,11,14],comment_input:0,comment_list:4,comment_text:0,commenthandl:0,commentsact:0,commenttext:0,commit:[0,2,10,11,14],common:7,commonli:[5,14],commun:[2,4,8,10],compact:0,comparator_factori:4,comparison:4,compil:[0,4],complet:[0,7],complex:11,complic:4,compon:[2,6,8,10],compos:[5,11],composedaccesscontrol:4,comput:10,concis:0,conda:12,condit:4,conf:12,config:[0,9,12],configur:[0,6],conform:7,conftest:7,confus:13,conjuct:0,conjunct:0,connect:[0,7],consid:[2,4],consider:7,consist:[0,11],constant:0,constrain:0,constraint:7,construct:[4,7,11],construct_author_info_dict:4,consult:8,contact:4,contact_email:4,contact_phon:4,contain:[0,3,4,7,10,12,13],content:[0,4],continu:2,contract:8,contribut:6,contributor:2,control:[0,4,7,8,10,14],conveni:[7,13,14],convers:[2,4],convert:[0,4,7],coordin:4,copi:[0,4,12],copy_valu:4,copyright:2,core:13,correct:2,correctli:[2,10],correspond:[0,3,4,11],cosmolog:4,cost:8,could:[0,4,6,11],count:0,counter:0,cover:[4,8],creat:[0,2,3,4,7,10,14],created_at:[0,4],created_bi:4,created_by_id:4,creator:0,credenti:12,crellin:10,cron:4,cronjobrun:4,crud:11,css:13,csv:3,ctype:4,curli:0,current:[0,2,4,9,10,11],current_us:0,cursor:4,curv:[10,12],custom:[4,10,11,13],customiz:10,customseraccesscontrol:11,customuseraccesscontrol:11,cutout:4,dask:10,data:[4,7,8,10,11],data_load:3,databas:[0,5,8,11,12,14],dataset:10,date:[4,10],datetim:[0,4],db_clear:12,db_demo:3,db_init:12,dbapi:4,dbdata:5,dbsession:[0,7,11],deal:[2,10],dec:4,dec_di:4,dec_err:4,dec_unc:4,declar:[0,4,7],declarative_bas:0,declarativemeta:[4,11],declin:4,decor:0,def:[0,11],defin:[0,2,4,7,11,13],definit:[0,13],deg:4,degre:4,delet:[0,4,7,11],deletable_phot_queri:11,demo:[8,12],depart:10,depend:[0,4,7,8,11],deploi:[5,10,12],deploy:[8,10],der:10,describ:[0,4,5,7,14],descript:[0,2,4,9],desi:4,desi_dr8_url:4,design:[4,6,8,10],desir:[0,4],destructur:0,detail:[0,2],detect:[4,11],detect_photometry_count:4,determin:[0,4,10],dev:12,develop:[2,6,8,10,11,13,14],diagram:[0,6],dialect:4,diamet:[3,4],dictionari:[0,2],differ:[2,11,12],dig:0,digit:4,dimens:4,direct:[2,12],directli:[2,4,7,11],directori:[0,5,8],dirti:0,discoveri:[4,8,10],discuss:[0,5,10],disk:0,dispar:8,dispatch:0,dispers:4,displai:[0,4,7,10],dist_cm:4,dist_kpc:4,dist_mpc:4,dist_nearest_sourc:4,dist_pc:4,distanc:4,distinct:4,distinguish:0,distribut:10,div:0,doc:[0,8,12,13],docker:10,document:[0,1,8,9,12],doe:[2,4,5,7,11,13,14],does_imag:4,does_spectroscopi:4,doesn:[0,4],doing:[3,12],dom:0,domain:8,don:[2,8],done:[2,4,10,13,14],down:[0,2,5,7,13],dr8:4,drawn:0,drive:6,driven:10,driver:0,drop:14,duck:0,dummi:[0,4],dure:[0,8,10,11],e_mag:4,e_mag_nearest_sourc:4,each:[0,2,3,4,7,10,11,14],easi:4,easili:[10,13],edit:[12,13],edu:3,effect:6,effici:11,either:[0,2,4,5,11,12],elast:8,eleg:2,element:[4,10,13],elev:[3,4],elig:7,elimin:7,els:0,email:[4,12],emploi:[0,10],empti:[0,4],enabl:12,encod:3,encount:11,encourag:[6,8,10],end:[4,11],end_dat:4,endpoint:[0,2,3,11],enough:2,ensur:[0,4,7,10,11,12],enter:0,entir:10,entri:[0,3,4,11],env:[7,11],environ:[2,8],ephemeri:4,equal:0,equival:0,error:[0,2,4,7,11,14],error_occur:0,es6:0,eslint:7,essenti:0,etc:[0,2,3,7,10,11,12,14],evalu:[0,4,13],even:[4,12],event:[0,8,10],eventu:10,ever:2,everi:[0,10,11],everytim:0,exact:4,exactli:[2,4,6],exampl:[0,2,3,4,5,7,10],except:[0,4],execut:[0,4,7,11,14],executemani:4,exercis:0,exist:[4,11],exit:4,exit_statu:4,expect:[0,4],experi:[10,11],explan:2,explicitli:0,exposur:4,express:[0,4],ext:4,extend:0,extens:[8,10],extern:0,extra:13,extract:[4,12],f_lambda:4,face:12,facil:[4,10,11],facilit:0,facilitytransact:4,factori:[7,10],fail:0,fals:[0,3,4],far:0,fast:6,faster:7,featur:[2,8],februari:10,feedback:2,fetch:[0,4,5],fetch_comments_ok:0,fetch_loaded_sourc:0,fetch_sourc:0,fetch_test_com:0,fetch_test_comments_ok:0,fetchcom:0,fetchon:4,fetchsourc:0,few:0,field:[0,2,3,4],file:[1,2,4,7,9,12,14],file_uri:4,filenam:4,filter:[0,3,4,11],filter_id:4,filtered_deletable_queri:11,finalize_transact:11,find:[2,7],finish:[0,11],fire:[0,7],firefox:[7,10],first:[0,2,4,5,7,8,14],first_nam:4,fit:12,fix:[2,4,14],fixed_loc:4,fixedtarget:4,fk_1:4,fk_2:4,flag:[4,12],flavor:2,flow:4,flux:4,flux_column:4,fluxerr:4,fluxerr_column:4,follow:[0,2,4,5,6,7,8,9,11,12,13],followup:[4,11],followup_request:4,followup_request_id:4,followuprequest:4,font:13,foreign:[4,7],foreignkei:0,fork:2,form:[0,2],format:[3,4,13],formatt:2,foster:8,found:7,foundat:[8,10],framework:[0,11],fresh:7,from:[0,4,5,7,8,10,11,12,13,14],from_ascii:4,front:4,frontend:[0,4,6,7,8,10,14],full:[0,2],fulli:[0,8],func:11,gaia:4,gal_lat_deg:4,gal_lon_deg:4,galact:4,gaussian:4,geckodriv:[2,7,10,12],gener:[0,1,4,7,11,13,14],get:[0,2,4,7,11,12,14],get_annotations_readable_bi:4,get_candidate_if_readable_bi:4,get_classifications_readable_bi:4,get_comments_readable_bi:4,get_if_accessible_bi:11,get_if_readable_bi:4,get_json:0,get_obj_annotations_readable_bi:4,get_obj_classifications_readable_bi:4,get_obj_comments_readable_bi:4,get_obj_if_readable_bi:4,get_photometry_readable_by_us:4,get_records_accessible_bi:11,get_source_if_readable_bi:4,get_spectra_readable_bi:4,get_taxonomy_usable_by_us:4,getelementbyid:0,getstat:0,git:[4,8,12,14],githook:14,github:[2,8,12],give:[0,2,14],given:[0,4,10,11],global:0,goe:[0,2,7],goldstein:10,good:2,googl:[8,10,12],gordon:[8,10],got:8,govern:11,grant:[4,8,10,11],granular:11,graphic:10,graphviz:12,gravatar:4,gravatar_url:4,great:0,green:[2,13],ground:4,group:[3,4,8,10,11],group_admin:3,group_admission_request:4,group_bi:11,group_id:[3,4],group_us:4,groupadmissionrequest:4,groupus:11,grow:2,guarante:7,guid:[2,6],guidanc:2,hale:4,hand:[0,9,10],handl:[0,4],handleclick:0,handlecommenttextchang:0,handler:[0,7],handlesubmitnewcom:0,happen:[0,12],hard:0,harder:13,has:[0,2,3,4,8,10,11,12],hash:4,hashabl:4,have:[0,2,4,5,10,11,12,13,14],haven:0,head:9,header:[0,4],headless:[7,14],headlessli:7,hello:0,helloworldel:0,help:[0,2,10,14],helper:4,henc:2,here:[0,3,4,5,13,14],hierarch:8,hierarchi:4,highest:4,histori:2,home:8,homebrew:12,homepag:0,hook:[0,4,13,14],horizon:4,host:[4,10,12],hour:4,hours_alloc:4,how:[0,4,5,8,12],howev:2,html:[1,13],http:[0,3,5,8,11,12],hub:[5,7],hubbl:4,human:2,hunt:13,idea:0,ideal:0,ident:[0,4],identifi:[4,11],idx:0,illustr:0,imag:[2,3,4],immedi:11,impl:4,implement:[0,2,4,7,10,11],implicit:0,importantli:10,improv:2,inch:4,includ:[0,4,7,10,13],inclus:[6,8],incom:[0,10],increment:0,inde:0,independ:0,index:[0,1,4,10],indic:[0,2,4],individu:[4,8],inf:4,infer:4,info:4,inform:[0,2,4,5,7,11],infrastructur:[8,10],ingest:[8,10,11,12],inherit:0,init:14,init_db:7,initi:[0,3,4,8,12],inject:0,injectrecu:0,injectreduc:0,inlin:13,inner:13,input:0,insert:[0,4,7,12],insid:[0,2,13],insight:10,inspect:5,inspir:10,instad:7,instal:[7,8,14],instanc:[0,4,7,8,11,12,13],instanti:0,instead:[0,2,4,6,7,13],institut:10,instruct:[0,2,4,12],instrument:4,instrument_id:4,integ:[0,4],integr:[2,10],intend:10,intent:10,interact:[0,4,7,10,11],interfac:10,intermedi:7,intern:[0,4],internal_kei:[0,4],interpol:4,intial:0,intro:0,introduc:0,introductori:0,introspect:11,invalid:[0,2],invalu:2,invis:4,involv:[0,7],is_:11,is_accessible_bi:11,is_act:4,is_admin:4,is_authent:4,is_modifiable_bi:4,is_readable_bi:4,is_roid:4,is_system_admin:4,is_token:4,islatest:4,isn:0,isnot:11,iso:4,isol:7,issu:[2,14],item:[4,13],item_typ:4,iter:11,its:[0,4,7,10,11],j2000:4,javascript:[0,2,7,10,13,14],job:[0,4],join:[4,7,11],join_model:4,join_tabl:4,joinedload:7,joinmodel:4,joshua:10,jpg:3,json:[0,2,4,7],json_util:7,jss:13,jsx:0,julian:4,just:[0,4,9,13],justif:4,kafka:10,kasliw:10,keep:10,kei:[0,4,7,11,12],kept:2,keystrok:0,keywoard:0,keyword:[0,7],know:[0,2,7,9],known:4,kubernet:[5,10],kwarg:4,lambda:11,laptop:[8,10],larg:[10,13],larger:13,last:[2,4],last_detected_at:4,last_detected_mag:4,last_modified_bi:[4,11],last_modified_by_id:4,last_nam:4,lat:[3,4],later:[0,2,12],latest:[4,12],latitud:4,latitut:4,launch:[5,7,8,14],law09:10,layer:11,layout:13,lead:[0,7],leak:11,learn:[0,4],least:[2,4,11],leav:13,left:[2,11],less:[4,12],let:[0,2,9],level:[3,4,8,11],leverag:7,libpq:12,librari:[0,10],licens:[6,8,10],light:[10,12],like:[0,2,4,8],line:[0,4,12],link:[0,4,10],lint:14,linux:[7,14],list:[0,2,3,4,7,10,11,13,14],listen:[0,4],listener_class:4,listener_classnam:4,liter:[0,4],live:[0,5,10,12],load:[3,7,10],load_demo_data:[3,5,8,9,12],load_env:7,load_seed_data:3,loaded_obj_kei:0,loader:[4,8],local:[4,5,10,12],localhost:[0,5,8,12],locat:[4,12],log:[0,5,7,8,10,12,14],logic:[0,4,6,7,10,11,13],login:12,lon:[3,4],longer:2,longitud:4,look:[0,2,4],loop:0,love:2,lowercas:0,lowest:4,luminos:4,luminosity_dist:4,machin:[4,10],made:[0,4,11,14],mag:4,mag_nearest_sourc:4,magnitud:4,mai:[0,2,4,5,8,12,13,14],main:[0,2,12],maintain:[0,4,8,10],make:[0,2,3,4,5,7,8,9,10,12,13,14],make_app:0,make_super_us:12,makestyl:13,manag:[0,4,8,10,14],mani:[0,2,4,6,10],manual:[12,14],map:[0,4,11],mapper:[0,4],mapperopt:4,maria:0,marshal:10,master:2,match:[0,3,11],materi:13,mean:[2,7,10],meant:[8,12],measur:4,media:13,median:4,medium:13,member:[2,4,10,14],membership:[11,14],memor:4,mention:0,merg:2,mergeabl:2,messag:[0,2,4,11],messagehandl:0,metadata:4,meter:4,method:[0,4],metric:4,microservic:10,middlewar:0,migrat:8,million:8,mind:[2,4,10],minim:2,misc:4,miscellan:4,mjd:[3,4],mobil:8,mode:[0,7,11],model:[0,7,11],model_1:4,model_2:4,model_util:[7,12],modern:8,modif:7,modifi:[0,2,4,6,8,10,11,12,13],modul:[0,13],modular:10,modulu:4,molecular:4,moment:0,monitor:[0,12],moor:[8,10],more:[0,2,5,7,10,11,12],morn:4,most:11,move:[2,4],mozilla:12,mpc:4,much:[0,2,5],mui:13,multi:[7,12],multipl:[4,11,13,14],must:[0,4,11],mxschmitt:7,mybutton:13,myconfig:12,name:[0,3,4,7,10],naul:10,nautic:4,navig:[0,8,12],ndarrai:4,nearest:4,necessari:4,necessarili:[4,7],need:[0,2,5,7,9,10,11,12],neither:[0,11],nest:[4,13],never:1,newcommenttext:0,newcount:0,newli:0,newsourcelist:0,next:[4,5,10],next_sunris:4,next_sunset:4,next_twilight_evening_astronom:4,next_twilight_evening_naut:4,next_twilight_morning_astronom:4,next_twilight_morning_naut:4,nginx:[10,12],nicknam:[3,4],night:8,nitpick:2,node:[0,12],nois:[4,11],non:[0,4],none:[0,4,11],note:[0,4,8,11],notic:[2,7],notif:[0,4],notimplementederror:11,novel:6,now:[0,2,3],npm:12,nullabl:0,number:[4,12],numer:[2,4],numpi:4,numpyarrai:4,oauth:[4,10],oauth_uid:4,obj:[0,4,7,11],obj_id:[3,4],obj_kei:0,obj_notif:4,object:[0,3,4,7,10,11],observ:[4,8],observatori:4,observed_at:4,observing_run:4,observingrun:4,obtain:5,obviou:7,off:9,offer:0,offset:4,often:[0,7,11],okai:2,omit:0,ommit:2,onc:[0,1,2,5,6,8,12],onchang:0,onclick:0,ondelet:0,one:[0,2,4,10,13],ones:[2,14],onli:[0,2,4,11,12,13,14],onto:2,ontolog:4,open:[2,6,8],oper:[0,2,4,7,11,13],opinion:2,oppos:4,optic:4,option:[0,4,11],or_:11,orcid:10,order:[0,4,7],org:[3,12],organ:0,origin:[0,2,4],original_action_typ:0,original_file_filenam:4,original_file_str:4,original_user_data:4,orm:[0,4,7,11],other:[0,2,4,6,7,8,10,12,13],otherwis:[0,5,11,14],our:[0,2,6,7,8,12],out:[0,2,4,7,10],outdat:0,outer:13,outerjoin:11,outlin:[0,2],output:[4,7],outsid:6,over:13,overrid:[4,11],overridden:[7,11],overwritten:1,own:[0,2,4],owner:[4,11],owner_id:4,ownership:4,p200:4,p60:3,pace:2,packag:[0,7,10],pad:13,page:[0,2,4,8,10,13,14],palomar:[3,4,10],panstarr:4,panstarrs_url:4,paper:[10,13],parallax:4,paramet:[4,7,11],parameter:13,part:[0,2,7,10],partial:8,particular:[0,4,11],pass:[0,2,4,6,8],passed_at:4,passing_alert_id:4,path:[0,4,12],pattern:[0,7,11],payload:[0,4],pdb:7,peak:4,peak_detected_at:4,peak_detected_mag:4,pend:4,per:8,perform:[0,4,7,10,12,14],permiss:[4,7,12],persist:4,person:2,pg_ctl:12,pg_hba:12,phase:10,phone:4,phot:3,phot_detection_threshold:4,photometri:[3,4,11],photometry_list:4,photometryflux:4,photometryhandl:4,photometrymag:4,pick:4,picker:4,piec:0,pip:[7,12,14],pipenv:12,place:[4,8,13],plai:[5,12],plan:[9,10],platform:[6,10,11],pleas:[0,2,6,8,12,13],plural:0,png:3,point:[4,11],popul:[3,8],port:12,portal:8,portion:0,posit:[4,13],possibl:[2,7,10,13],post:[0,3,4,11,14],postgr:12,postgresql:[4,5,11,12],potenti:[10,11],practic:[6,8,11],practition:8,pre:[13,14],predefin:11,prefer:[2,4,13],premis:8,prepar:14,present:[4,12],presum:9,prettier:2,prettierj:7,prevent:11,previou:[0,2,13],primari:[4,11],print:7,prioriti:4,privat:[4,8],privileg:[4,12],probabl:4,problem:[2,10],proc:10,process:[0,4,10,11],process_bind_param:4,process_result_valu:4,produc:4,product:5,profil:14,program:3,program_a:3,programmat:[0,4],project:[2,8,10],promot:7,prop:0,properti:[0,4,8],properties_and_mod:4,propos:4,proposal_id:4,proprietari:8,protect:11,prototyp:10,proven:4,provid:[0,2,4,10,11,13],proxi:7,ps1:4,ptf:10,public_url:4,publish:10,pull:[2,5,6,8,11],pure:0,purpos:[0,2,6],push:[0,2,6,7],push_al:0,put:[0,4],pyscopg2:7,pytest:[2,7],python3:12,python:[0,2,4,7,10,14],python_typ:4,pythonpath:9,qualiti:2,quantiti:4,queri:[0,4,7,10,11,13],query_accessible_row:[4,11],query_records_accessible_bi:11,queryinprogress:0,quick:10,quickli:2,ra_di:4,ra_err:4,ra_unc:4,rais:[4,11],raise_if_non:11,random:0,rapid:2,rather:[0,4],ratio:[4,11],rayleigh:4,react:[6,10],reactdom:0,reactj:0,read:[0,3,4,11],readabl:4,real:[0,10],rebas:2,recap:0,receiv:[0,4],recommend:2,record:[0,4,7,11],recov:7,recurs:8,red:13,redoc:1,redshift:[4,10],redshift_histori:4,reduc:[0,4],redux:[6,7,10],ref:4,refer:[0,4,13],reflect:[0,12],reflog:2,reformat:[2,7,14],refresh:[0,7],refresh_sourc:0,regard:4,regardless:10,regex:0,regist:4,regular:0,reject:2,relat:[0,4,7,11],relationship:[7,11],relationship_chain:4,relationship_kei:4,relationship_nam:4,releas:[2,6,8,10,12],relev:[0,7],rem:13,remedi:12,rememb:2,remot:2,remov:5,render:[0,2,10,13],rendit:10,repeat:7,replac:[6,12],repositori:[2,12],repres:4,represent:4,reproduc:2,request:[0,2,4,6,7,8,10,11],requester_id:4,requesthandl:0,requestresult:0,requir:[2,4,7,11,12],requisit:[4,11],reset:[0,2],resolv:2,resourc:[0,14],respect:0,respons:0,restart:12,restrict:[4,11],result:[0,2,4,7,9,13],result_processor:4,resultfromsomeapical:0,retain:2,retriev:[0,4,11],reus:[6,8],revers:4,review:[6,8,9],revis:9,rich:10,right:[4,11],rise:4,rise_tim:4,robot:4,robust:6,role:[4,7,10],role_id:4,roleacl:4,rollback:[7,11],root:[0,13],rout:[0,10],router:0,row:[0,4,11],run:[0,2,4,5,7,8,9,10,12,14],run_id:4,run_test:[0,7],runner:7,safe:7,same:[0,2,4,5,7,10,13,14],sampl:[8,12],satisfi:2,save:[3,4],saved_sourc:4,scaffold:10,scalabl:[6,11],scalar:4,scale:[8,10],scan:4,scannabl:4,schema:[8,9],scienc:10,scientif:10,scikit:2,scipi:10,scope:7,score:4,scratch:5,screen:[0,12,13],script:[2,4,10],sdss:4,sdss_url:4,search:8,searchabl:4,second:[0,4],secondari:7,secret:12,section:[0,4,12,13],secur:[4,10,11],see:[0,2,3,4,5,6,7,8,11,12,13],select_from:11,selector:[4,13],selenium:[0,2],self:[0,4,11,12],semant:4,send:0,send_kei:0,sensit:11,sent:4,separ:[0,2,4,7,12],sequenti:2,seri:10,serial:4,serv:[0,4,7,8,11],server:[5,7,8,10,12],servic:[4,5,7,12],session:[0,7,11],set:[0,4,7,11,12,14],set_tim:4,set_trac:7,setnewcommenttext:0,settl:13,setup:[5,7,8],sever:[2,7,13],share:4,sheet:13,shortcut:7,shorter:2,shorthand:[0,2],shortli:0,should:[0,2,4,6,7,12,13],show:[2,6,8,12],shown:6,side:2,signal:[4,11],signatur:0,similar:[2,4],simpl:[0,13],simpli:[0,2],simplifi:[0,7],sinc:4,singl:[0,2,4,7,11],single_user_group:4,singleton:4,site:4,sky:[4,10],skycam_link:[3,4],skyport:[2,3,4,5,6,7,10,11,12,13,14],skyportal_dbdata:5,skyportal_env:[5,12],skyportal_test:12,sloan:4,slugifi:4,slugifiedstr:4,small:[2,13],smallest:0,snr:[4,11],socket:0,sofia:0,softer:2,softwar:[8,12],sole:4,some:[0,2,4,5,7,12,14],some_request_typ:0,somehandl:0,sometim:[2,8],somewher:12,sort_key_funct:4,sortabl:4,sourc:[0,4,5,6,8,10,14],source_is_readable_bi:4,source_notif:4,sourcelist:0,sourceview:4,space:[4,13,14],span:[2,13],spec:4,special:4,specif:[4,7,10,11,14],specifi:[0,4,11,13],specific_test:7,spectra:[4,10,11,14],spectral:4,spectrograph:4,spectroscopi:4,spectrum:[4,11],spend:2,split:[2,13],spread:[0,13],sql:[0,4],sqlalchemi:[0,7,11],sqlalchemymodelfactori:7,sqltype:4,squash:2,ssh:7,stage:14,stai:0,stamp:[4,9],stand:13,standalon:8,standard:[6,7,8],star:4,start:[0,4,9,12],start_dat:4,state:[4,7,9,10,11],statement:[0,4],statu:[0,4,11],step:[2,5,7],stil:2,still:[0,2],stop:7,store:[0,3,4,5,8,10],str:4,stream:[4,8,10,11],stream_id:[4,11],streamlin:2,streamus:11,string:[0,4],strong:8,structur:[0,4,7],stub:1,studi:8,style:[7,8],sub:[4,10],subclass:[0,4,7,11],subfactori:7,subject:11,submiss:0,submit:[0,2,6,8],submit_test_com:0,submitcom:0,submodul:[0,8],subprocess:4,subsequ:9,subset:[7,14],subtl:7,success:[0,11],successfulli:[0,11],sudo:[7,12],suggest:2,suit:[0,6,7,8,10,12],summari:8,sunris:4,sunset:4,supervisor:12,suppi:0,suppli:0,support:[10,13],sure:[0,11],survei:[4,8,10],swinbank14:10,sync:0,synchron:[0,8],synopt:10,syntax:0,system:[2,4,8,10,11,12],tabl:[0,4,7,11],table1:4,table2:4,tablet:8,tag:[0,10],tail:14,take:[0,2,4,7,11,13],taken:[4,7],talk:2,target:[0,4,11,13],target_group:4,target_or_target:4,tax:4,taxonomi:[4,11],taxonomy_id:4,tcp:12,team:[2,6,8],tear:7,teardown:7,technolog:[0,6],teff:4,telescop:[3,4,10],telescope_id:4,tell:[0,9],tend:4,termin:[0,8],test:[0,3,6,8,10,14],test_:7,test_com:0,test_conf:7,test_fil:7,test_frontend:7,test_headless:7,test_test_com:0,test_text:0,test_us:7,test_user_profile_fetch:7,testadmin:3,testcom:0,testcommenthandl:0,testcommentinput:0,testcommentsubmitbutton:0,testid:0,testus:12,text:[0,4],than:[0,2,4],thank:[8,10],thei:[0,2,4,6,7,8,11],them:[0,2,4,5,7,12,14],theme:13,therefor:2,thi:[0,1,2,3,4,5,7,8,10,11,12,13,14],thing:[4,7],those:[0,3,4],thousand:8,three:0,through:[0,3,4,7,11,14],thumbnail:[3,4],thunk:0,ties:4,time:[0,2,4,5,8,10,13,14],timestamp:4,tire:8,titl:[2,10],tmate:7,to_dict:[4,7],to_json:7,togeth:0,toggl:10,token:[0,4,10,11],token_group:4,token_id:4,tokenacl:4,too:4,took:[0,4],tool:[3,7,13,14],toolkit:0,top:[3,4,10,13],topic:2,tornado:[0,10],toward:4,traceabl:8,track:[0,2,4,11],transact:[4,11],transform:4,travi:10,tree:0,trigger:[0,11],troubl:12,trust:12,ttype:3,tupl:[0,4],turn:[0,2],tutori:0,twilight:4,two:[0,2,5,10,13,14],type:[0,2,4,10,11,13],typeengin:4,typeerror:4,types_sql_value_process:4,typic:[0,4,10,12],uid:4,ultim:10,unabbrevi:4,uncertainti:4,uncontroversi:2,under:[0,2,4,6,8,9,10],underli:[4,6],understand:13,unfamiliar:0,unintend:7,uniqu:[4,12],unit:4,univers:10,unless:2,unsupport:6,until:2,upcom:8,updat:[0,2,4,7,11,12],update_sourc:0,updatecount:0,updatesourc:0,upgrad:7,upload:[4,14],upload_id:4,uploader_id:4,upon:[0,4,7,10],upstream:2,url:[0,4],usag:[0,7,8],use:[0,2,3,4,5,7,8,9,10,11,12,13],used:[0,1,3,4,6,7,8,10,11,13,14],usedispatch:0,useeffect:0,useful:[0,10],usemediaqueri:13,user:[0,3,4,7,10,11],user_id:[0,4,11],user_id_from_user_or_token:4,user_model:4,user_or_token:[4,11],user_or_token_accessible_group:4,user_or_token_accessible_stream:4,useraccesscontrol:[4,11],useracl:4,usernam:[3,4],username_or_token_id:4,userrol:4,uses:[0,4,7,11,13],useselector:0,usest:0,usestyl:13,using:[0,2,4,5,6,7,8,10,11,13],usr:12,utc:4,util:[0,7],valid:[0,4],valu:[0,3,4,12,13],van:10,vari:10,variabl:[0,2,4,12],variou:[0,7,10],varstar:4,vector:11,veri:0,verifi:11,verify_permiss:11,version:[0,2,4,9,10,12],via:[0,4,5,7,10,13],view:[0,4,10],viewer:4,viewonlyus:3,violat:11,virtual:12,virtualenv:12,visibl:[4,14],visual:[4,10],volum:5,wai:[0,2,4,7,11,13,14],wait:0,wait_for_xpath:0,walk:0,walt:10,want:[0,4,8,11,12],warrant:0,watch:7,wave_column:4,wavelength:4,weather:4,weather_link:4,weather_retrieved_at:4,web:[0,5,7,8,10,13,14],webserv:7,websit:8,websocket:[4,10],welcom:[0,10],well:0,were:[6,7,8,11],what:[0,2,4],whatev:[0,12],when:[0,2,3,4,5,7,8,9,11,13,14],whenev:0,where:[0,2,11,12],wherea:2,wherev:0,whether:[0,2,4],which:[0,2,3,4,5,7,8,10,11,13,14],who:[0,4,11],whose:0,wide:[0,12],widget:4,wil:4,window:12,within:[0,4,7,11],without:[4,5,10,14],word:13,work:[0,7,8],workflow:7,world:0,would:[0,2,3,4,13],wrap:[0,4],write:[2,7,13],written:[0,6],xfvb:7,xvfb:7,xxxx:12,yaml:[0,3,7,9,12],yield:7,you:[0,2,5,6,7,8,9,11,12,13,14],your:[0,7,8,12],yourself:8,zero:4,zero_index:4,zeropoint:4,zone:4,ztf_alert:4,zwicki:10},titles:["Adding new features","API","How to Contribute","Data loader","Database Schema","Deployment","System Architecture","Developer notes","SkyPortal","Database migrations","Summary","Access controls","Setup","Styling components","Usage"],titleterms:{"class":11,"import":14,"new":[0,11],Adding:[0,5,14],PRs:2,RLS:11,access:11,acknowledg:[8,10],action:7,addit:12,administr:12,api:[1,4,11],architectur:[6,10,11],authent:12,back:0,base:12,basic:0,being:11,bind:11,bookkeep:0,box:13,bug:2,build:5,chang:2,check:11,code:[2,14],commit:7,compon:[0,13],concept:0,conclus:10,configur:12,contain:5,contribut:[2,8],control:11,conveni:11,creat:[11,12],creation:0,data:[0,3,5,12],databas:[4,7,9],debian:12,debug:7,depend:[2,12],deploy:5,describ:2,design:[11,13],develop:7,diagram:4,docker:[5,7],document:4,don:13,download:12,edit:0,element:0,end:0,enforc:11,entiti:4,environ:12,exampl:11,featur:0,file:[0,3],fixtur:7,flow:0,focus:2,format:14,front:0,further:11,futur:10,gener:9,git:2,github:7,grid:13,group:14,guid:8,guidelin:2,handl:5,handler:11,hook:7,how:2,imag:[5,7],includ:2,instal:12,introduct:11,larg:2,latest:9,launch:12,licens:2,linter:14,linux:12,loader:3,maco:12,makefil:14,method:11,migrat:9,model:4,note:7,overview:0,permiss:[11,14],polici:11,pre:7,problem:5,process:2,prop:13,python:12,quick:8,react:0,redux:0,refer:[3,10],relationship:4,report:2,respons:13,review:2,role:14,schema:4,set:[2,9],setup:12,size:13,skyport:[0,8],sourc:12,sqlalchemi:4,start:[5,8],state:0,stop:5,style:[2,13],summari:[0,10],system:[6,13],target:14,test:[2,5,7,12],tip:2,troubleshoot:12,upgrad:9,usag:14,user:[8,12,14],veri:2,websocket:0,work:[2,10],your:2}})
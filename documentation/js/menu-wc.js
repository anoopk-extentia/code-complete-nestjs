'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">code-complete documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' : 'data-target="#xs-controllers-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' :
                                            'id="xs-controllers-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' : 'data-target="#xs-injectables-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' :
                                        'id="xs-injectables-links-module-AppModule-2b956b18ec3d63a14d16ba0a8e2f200277bc99246e10b6cd6943503319aa0ab8a6fb863b0ba3be8f0ba6fd86a93f83bec82e0c2cfffbd7df04c9cfa600c4224b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NameInsertedListener.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NameInsertedListener</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NamesModule.html" data-type="entity-link" >NamesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' : 'data-target="#xs-controllers-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' :
                                            'id="xs-controllers-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' }>
                                            <li class="link">
                                                <a href="controllers/NamesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NamesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' : 'data-target="#xs-injectables-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' :
                                        'id="xs-injectables-links-module-NamesModule-93a5890ab76e7f50a19e13d11311b51fced99d7b9495f8185c72ec617b3b4af4c116a957d395ae7336e394edd10f6b66f1598395bc6c4e7e111b1a2ae0b9534a"' }>
                                        <li class="link">
                                            <a href="injectables/NamesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NamesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' : 'data-target="#xs-controllers-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' :
                                            'id="xs-controllers-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' : 'data-target="#xs-injectables-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' :
                                        'id="xs-injectables-links-module-UsersModule-b6b93dfdb4a60c296a86d4f9cb829866c7f141b33f51b8524fcf6ef9ce25d3268936eff7c575974456844da62d1d938eaa5af01895ea9d68e81a1d18b5c8e9a5"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NamesController.html" data-type="entity-link" >NamesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Name.html" data-type="entity-link" >Name</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateNameDto.html" data-type="entity-link" >CreateNameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsersDto.html" data-type="entity-link" >CreateUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/init1644393371912.html" data-type="entity-link" >init1644393371912</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNameDto.html" data-type="entity-link" >UpdateNameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUsersDto.html" data-type="entity-link" >UpdateUsersDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/userdata1644569328662.html" data-type="entity-link" >userdata1644569328662</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NameInsertedListener.html" data-type="entity-link" >NameInsertedListener</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NamesService.html" data-type="entity-link" >NamesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
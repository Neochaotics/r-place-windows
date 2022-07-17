/* ==UserStyle==
@name           Fextralife Tweaks
@namespace      github.com/Neochaotics/
@version        1.0.0
@description    Recolors & Resises Fextralife Wiki
@author         Neochaotics

==/UserStyle== */
@-moz-document domain("wiki.fextralife.com")
{
	#sidebar-wrapper, div.ad-banner.hidden-xs, #at4-share, #content-add-a, a[href*="fextralife.com/be-a-vip"], picture, div.footer-sticky, div.hidden-xs, span.navsprite.miniring, div.vault-loder.top-right-vault
	{
		display: none !important;
		width: 0 !important;
		height: 0 !important;
	}
	#wrapper
	{
		padding-left: 0 !important;
	}
	div.container-fluid.fex-bg-image, div.map
	{
		background: #121212 !important;
	}
	ul.dropdown-menu
	{
		background: #282828 !important;
	}
	.page-segment.h1::after, .page-segment h2::after, .page-segment h3::after h1::after
	{
		background-color: #999966f2 !important;
	}
	.dropdown-menu > li > a:hover
	{
		background-color: #484848 !important;
	}
	div.fex-main
	{
		background-color: #000000bf !important;
	}
	.btn-default, .navbar-inverse .navbar-nav > .open > a
	{
		background-color: #12121240 !important;
		border-color: #00000000 !important;
		border-radius: 4px;
	}
	::-webkit-scrollbar
	{
		width: 10px;
		background-color: #191919bf;
		overflow: auto;
		display: block;
	}
	::-webkit-scrollbar-thumb
	{
		background-color: #50505080 !important;
		border-radius: 6px;
	}
	*:not(pre, pre *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon, a.wiki_link, .leaflet-container a)
	{
		font-family: "Fira Mono", Fira, Helvetica !important;
		color: #ffffffbf !important;
	}
}
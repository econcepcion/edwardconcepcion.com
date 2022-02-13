<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define('DISALLOW_FILE_EDIT', true); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
define('FORCE_SSL_ADMIN', true); // Redirect All HTTP Page Requests to HTTPS - Security > Settings > Enforce SSL
// END iThemes Security - Do not modify or remove this line
define('WP_AUTO_UPDATE_CORE', 'minor'); // This setting is required to make sure that WordPress updates can be properly managed in WordPress Toolkit. Remove this line if this WordPress website is not managed by WordPress Toolkit anymore.

/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

#define('WP_DEBUG', true);
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'edwardco_prod');

/** MySQL database username */
define('DB_USER', 'edwardco_produse');

/** MySQL database password */
define('DB_PASSWORD', "IB+EaOuD1LK%");

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '=)o[FeohSMiTiNjK7%^/|Z~>R[^ePhZ2lCs,03GsNu,+q~  CaG?@?3{Fb~.5+Xo');
define('SECURE_AUTH_KEY',  '8}/,^9;`MwmOf/8Rfa~p_#ojT`{-hy!5zLl0)myx?yo:X5_Et;+:eaap29I6qsqB');
define('LOGGED_IN_KEY',    '[sA(IGy8A_0HGtc8Nc72VULlvYumd6yXJ[zZaV{kb_$Ppr/Od[6?TX,H|q;m<l5r');
define('NONCE_KEY',        'OZsJQ= B&UvhC+KOu bJybjgD6^SomlUr0+lbK2|b>hI/6n@zM#vUuM1sq^Otx%5');
define('AUTH_SALT',        'CBEHxZI$(]7(3-ak@aw[M7^zE:EgnmV;EK*&piW(=JIUiru$7JVfe*;WpeW-Ehu>');
define('SECURE_AUTH_SALT', 'T2kM5cA*@s]u7 (v*@a0@k>(,n*:)]4G1Y}cfTJ/agn7V&COTY;i_XJdI84:+V!I');
define('LOGGED_IN_SALT',   '0,=G%mL7J,qXuI?wb#4tyvY, WUW6[O=]PJq]*put91,TtcHqk|eGzkX<:%O5}ft');
define('NONCE_SALT',       'j?KqmST0YEC4})a,sE8U7c5C.tohgx:a/R58c~Y8=l8<,5Ou}<[X[VXJjQ&>IOgY');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ec_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH'))
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

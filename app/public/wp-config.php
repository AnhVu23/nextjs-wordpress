<?php
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
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'WfLlml9EVhlLdHxslbI4P4IbXX8bsOT6OtqsO3geH4PktD2W3tE0rWiDXyssWbsg01UyfpJ02Gqrv4fAFqZfPA==');
define('SECURE_AUTH_KEY',  'Boy/9k3nEOGLoi3QdgTNuxolR/ss1O7BLwSNRj5efjqHqsNnnW2y9OlxRPlOHJw7Lp1Ity0NfV36CsEaWa/t1A==');
define('LOGGED_IN_KEY',    'sOMBvnXUWlRqaJLvSV2UU5hQtGapRiLKUFnWWJM0LA3gRUBDRVpLOtTCObwe52FvjnDCw2t7kXuZxjJ1CKWtbw==');
define('NONCE_KEY',        '2mpz7z/t6L4NX0F5SQBJ3ZLisd1HMwHiKHz7M5sGPHZQepMunlN8iETznxpwNdKW+FUgXDXcf2TJPwE0i/RhLA==');
define('AUTH_SALT',        '8KBDOwjUwQLoR7FXW6Eka7bd9oI+D4w8ktUeUxW44a5mbdQfVB74/YFkvx38NheC0jHmXjeOeixbaAFTJJoe7w==');
define('SECURE_AUTH_SALT', 'fsnhegllObFJbpPO42gZrFmWUaAFv7T2xEILDbdZA49ZpyL6qihhoD5Y4dxclA6Ye9n2t+8vs6AISVGBJCAUjQ==');
define('LOGGED_IN_SALT',   'eDSOmy26gzV2FpWX4Dnqb3cSHn52Vlncf0Z/rB+HwIen1FaYvbaeyDNQdjSe+nmKdnQzLCG5TsdqQqSJE/PA8Q==');
define('NONCE_SALT',       '1tjNgl+t6VRm9QbYwFnk61K8Hl7HneQdhllPGLlG/aDpX4ihWOwiCTt3O+hPPA9YGyo9UEVmyCPy2cBJrA1CWQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

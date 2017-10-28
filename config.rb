require 'compass/import-once/activate'
require 'bootstrap-sass'
# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "web/"
theme_dir = 'web/sites/abacus/themes/custom/abacus'
css_dir = "#{theme_dir}/css"
sass_dir = "#{theme_dir}/scss"
images_dir = "#{theme_dir}/images"
javascripts_dir = "#{theme_dir}/javascripts"
fonts_dir = "fonts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Post compile hook
# on_stylesheet_saved do |file|
#   system "drush @abacus cc all"
# end
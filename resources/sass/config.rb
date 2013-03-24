# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
<<<<<<< HEAD
load File.join(dir, '..', '..', 'touch', 'resources', 'themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
images_dir = File.join(dir, "..", "images")
output_style = :compressed
environment = :production
=======
load File.join(dir, '..', 'themes')

# Compass configurations
sass_path    = dir
css_path     = File.join(dir, "..", "css")
environment  = :production
output_style = :compressed
>>>>>>> f25549b2caefc9e4d04997fd212d5afadac8ab5d

from django.apps import AppConfig


class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'
    verbose_name="Gestion del Blog" #luego de cambiar el nombre se debe agregar la ruta en settings apps

import PIL
from django.contrib.auth.models import User
from django.db import models


class Produto(models.Model):
    titulo = models.CharField(max_length=50, null=False, blank=False)
    descricao = models.TextField()
    fotos = models.ImageField(upload_to='produto/% Y/% m/ % d')
    valor = models.DecimalField(max_digits=100, decimal_places=2, null=False, blank=True)
    data_criacao = models.DateTimeField(auto_created=True)
    upgrade = models.DateTimeField(auto_now_add=True)
    criador = models.ForeignKey(User, on_delete=models.PROTECT, null=False, blank=False)
    ativo = models.BooleanField(default=False, null=False, blank=False)

    def __str__(self) -> str:
        return self.titulo


class Banner(models.Model):
    titulo = models.CharField(max_length=50, null=False, blank=False)
    fotos = models.ImageField(upload_to='banners/% Y/% m/ % d', null=False, blank=False)
    data_criacao = models.DateTimeField(auto_created=True)
    upgrade = models.DateTimeField(auto_now_add=True)
    criador = models.ForeignKey(User, on_delete=models.PROTECT, null=False, blank=False)
    ativo = models.BooleanField(default=False, null=False, blank=False)

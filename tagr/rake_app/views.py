from django.shortcuts import render
from django.views.generic import TemplateView
from rake import rake


class MainView(TemplateView):
    template_name = "tagging.html"
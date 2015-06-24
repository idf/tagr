import json
from django.http import HttpResponse
from django.shortcuts import render
from django.template.response import SimpleTemplateResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView, View
from rake import rake


class MainView(View):
    template_name = "tagging.html"

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(MainView, self).dispatch(*args, **kwargs)

    def get(self, request, *args, **kwargs):
        return SimpleTemplateResponse(MainView.template_name)

    def post(self, request):
        dic = json.loads(request.body)
        ret = rake.Rake().run(dic["text"])
        ret = filter(lambda x: len(x.split(" ")) > 1, map(lambda x: x[0], ret))
        ret = {"keywords": list(ret)}
        return HttpResponse(json.dumps(ret))

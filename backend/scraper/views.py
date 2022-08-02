from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http.response import JsonResponse

from .models import Search_Param as API
from .serializers import Search_ParamSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def SearchAPI(request):
    if request.method == 'GET':
        search = API.objects.all()
        searchSerializer = Search_ParamSerializer(search, many=True)
        return JsonResponse(searchSerializer.data, safe=False)

    if request.method == 'POST':
        searchSerializer = Search_ParamSerializer(data=request.data)
        print(request.data)
        if searchSerializer.is_valid():
            searchSerializer.save()
            return Response(searchSerializer.data, status=status.HTTP_201_CREATED)


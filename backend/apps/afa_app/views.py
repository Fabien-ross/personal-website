from .models import Document
from django.http import JsonResponse


def test(request):
    try:
        latest_document = Document.objects.order_by("-created_at")[0]
        data = {"message": f"""The migration was successful! Here is the latest document that appears in table 'Document' of DB 'my_postgres_db': '{latest_document.title}' (If you see nothing, the DB must be empty!)"""}

    except:
        data = {"message": """Server Working! You are seeing this message because you didn't migrate the postgres DB structure! Refer to READ_ME."""}
    return JsonResponse(data)

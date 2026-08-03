from .models import MyModel
from django.http import JsonResponse


def test(request):
    try:
        latest_question = MyModel.objects.order_by("-pub_date")[0]
        data = {"message": f"""The migration was successful! Here is the latest question that appears in table 'MyModel' of DB 'my_postgres_db': '{latest_question.get_question_text()}' (If you see nothing, the DB must be empty!)"""}

    except:
        data = {"message": """Server Working! You are seeing this message because you didn't migrate the postgres DB structure! Refer to READ_ME."""}
    return JsonResponse(data)

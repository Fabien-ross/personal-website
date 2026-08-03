from django.db import models

class MyModel(models.Model): # Question
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField("date published")
    
    def get_question_text(self):
        return self.question_text
    

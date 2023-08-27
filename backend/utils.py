from rest_framework.response import Response
from .models import Note
from .serializer import NoteSerializer
from django.shortcuts import redirect
from django.http import HttpResponseRedirect


def getNotesDetail(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


def getNoteDetail(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)


def createNote(request):
    data = request.data
    note = Note.objects.create(title=data['title'], body=data['body'])
    serializer = NoteSerializer(note, many=False)
    return HttpResponseRedirect('http://localhost:5173/')


def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("DELETED")


def updateNote(request, pk):
    note = Note.objects.get(id=pk)
    data = request.data
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response("UPDATED SUCCESSFULLY")

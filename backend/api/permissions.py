from rest_framework.permissions import BasePermission


class IsManager(BasePermission):

    def has_permission(self, request, view):
        return request.user.role.lower() == 'управляющий'
    

class IsOwner(BasePermission):

    def has_object_permission(self, request, view, obj):
        return request.user in [obj.employee, obj.courier]
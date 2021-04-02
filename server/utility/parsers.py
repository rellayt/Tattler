def user_parser(user):
    return {
            'id': str(user.id),
            'name': user.name,
            'email': user.email,
            'created_at': str(user.created_at)
    }
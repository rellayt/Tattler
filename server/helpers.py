def destructure(property, *keys):
    return [property[key] if key in property else None for key in keys]


from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Product, Category
from django.shortcuts import get_object_or_404

# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse({'products': products_json}, json_dumps_params={'indent': 2})

def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    product_json = {f'Product {product.id}': {
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.name
    }}
    return JsonResponse(product_json, json_dumps_params={'indent': 2})

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse({'categories': categories_json}, json_dumps_params={'indent': 2})

def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    category_json = {f'Category {category.id}': {
        'name': category.name
    }}
    return JsonResponse(category_json, json_dumps_params={'indent': 2})

def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    cat_products = [p.to_json() for p in Product.objects.filter(category=category)]
    return JsonResponse({f'Products of category {category.id}': cat_products}, json_dumps_params={'indent': 2})
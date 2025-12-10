from django.shortcuts import render
from .models import Product

def product_list(request):
    products = Product.objects.all().order_by('-date_added')
    return render(request, 'Page/product_list.html', {'products': products})


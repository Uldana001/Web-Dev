from rest_framework.routers import DefaultRouter
from django.urls import path
from api.views import CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView, ProductListAPIView, ProductDetailAPIView

router = DefaultRouter()

urlpatterns = router.urls + [
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', CategoryProductsAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
]
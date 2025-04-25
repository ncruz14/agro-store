import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  form: FormGroup;
  errorMessage: string = '';

  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  createProduct() {
    if (this.form.invalid) return;

    this.productService.createProduct(this.form.value).subscribe({
      next: () => {
        this.form.reset();
        this.closeModal.nativeElement.click(); // Cerrar modal
        this.loadProducts(); // Recargar productos
      },
      error: (err) => {
        this.errorMessage = err.error?.msg || 'Error al crear producto';
      }
    });
  }
}

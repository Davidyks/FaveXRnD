<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function goToAdminPanel(){
        return view('admin-panel');
    }

    public function getAllProducts()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function getProductById($id){
        $product = Product::find($id);
        return response()->json($product);
    }

    public function store(Request $request){
        $request->validate([
            'name' => ['required'],
            'price' => ['required'],
            'stock' => ['required'],
            'description' => ['required'],
            'picture' => ['required', 'image'],
        ]);

        $dataProduct = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description,
            'picture' => $request->picture, // Set initially empty, will be updated later
        ]);

        if ($request->hasFile('picture')) {
            $picture_path = $request->file('picture');
            $pictureName = $dataProduct->id . '_' . $picture_path->getClientOriginalName();
            $picture_path->storeAs('public/ProductImage', $pictureName);
            $dataProduct->picture = 'ProductImage/' . $pictureName;
            $dataProduct->save();
        }

        return response()->json($dataProduct, 201);
    
   
    }

    public function update(Request $request, $id){
        $request->validate([
            'name' => ['required'],
            'price' => ['required'],
            'stock' => ['required'],
            'description' => ['required'],
            'picture' => ['required', 'image'],
        ]);

        $dataProduct = Product::find($id);

        if (!$dataProduct) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        
        Storage::delete('/public/' . $dataProduct->picture);
        
       
        $dataProduct->update([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'description' => $request->description,
            'picture' => $request->picture,

        ]);
        //store image
        $picture_path = $request->file('picture');
        $pictureName = $id .'_'. $picture_path->getClientOriginalName();
        $picture_path->storeAs('/public/ProductImage', $pictureName);
        $dataProduct->picture = 'ProductImage/' . $pictureName;
        $dataProduct->save();

        return response()->json();
    }

    public function delete($id){
        $dataProduct = Product::find($id);

        if (!$dataProduct) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        
        if($dataProduct->picture){
            Storage::delete('/public/'.$dataProduct->picture);
        }
        Product::destroy($id);
        return response()->json();
    }
}
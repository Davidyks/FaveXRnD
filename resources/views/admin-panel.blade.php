<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="AdminPanel.css"/>
    <link rel="stylesheet" href="{{ asset('css/admin-panel.css') }}">
    <title>XYZ E-Commerce</title>
</head>
<body>
    <header>
        <img
            src="{{ asset('image/logo.svg') }}"
            alt="XYZ E-Commerce Logo"
        />

        <details>
            <summary>
                <img
                    src="{{ asset('image/icon-profile.svg') }}"
                    alt="Profile"
                />
                <p> Admin </p>               
            </summary>
            <button>
                Logout
            </button>            
        </details>
    </header>

    <main>
        <button id="button-create">
            Tambah Produk
        </button>

        <table>
            <tr id="table-header">
                <td width="40%"> Nama Produk </td>
                <td width="20%"> Harga </td>
                <td width="20%"> Stok </td>
                <td width="20%"> Aksi </td>
            </tr>

            <tbody id="table-products">
                <!-- Rendered using JavaScript -->
            </tbody>
        </table>
    </main>

    <section id="popup-form">
        <!-- Rendered using JavaScript -->
    </section>

    <script src="{{ asset('js/admin-panel.js') }}"></script>
</body>
</html>
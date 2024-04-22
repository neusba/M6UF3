<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

	<!-- <link rel="stylesheet" href="css/style.css"> -->
</head>

<body>
	<div class="container pt-5 pb-5">
		<h4>Formulari de registre de pisos</h4>

		<div class="row">
			<div class="col-6">
				<form id="form-user-register">
					<div class="form-row mt-5 mb-4">
						<div class="col-8">
							<label for="">Nom*</label>
							<input type="text" class="form-control" id="nom_pis" value="" name="">
						</div>

						<div class="col-4">
							<label for="">Preu*</label>
							<input type="text" class="form-control" id="preu_pis" value="" name="">
						</div>	
					</div>
					
					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Via</label>
							<select id ="vies" class="custom-select">
								<option selected></option>
								<option value="1">Carrer</option>
								<option value="2">Torrent</option>
								<option value="3">Avinguda</option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Nom</label>
							<input type="text" class="form-control" id="nom_via">
						</div>

						<div class="col-4">
							<label for="">Número</label>
							<input type="text" class="form-control" id="numero_via">
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Pis</label>
							<input type="text" class="form-control" id="pis">
						</div>

						<div class="col-4">
							<label for="">Escala</label>
							<input type="text" class="form-control" id="escala">
						</div>

						<div class="col-4">
							<label for="">Porta</label>
							<input type="text" class="form-control" id="porta">
						</div>
					</div>
					
					<div class="form-row mb-4">
						div pel mapa que ens trobarà la latitud i la longitud mitjançant una api de google.
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">CP</label>
							<input type="text" class="form-control" id="cp">
						</div>

						<div class="col-4">
							<label for="">Districte</label>
							<select id="districtes" class="custom-select">
								<option selected></option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Barri</label>
							<select id="barris" class="custom-select">
								<option selected></option>
							</select>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-4">
							<label for="">Població</label>
							<select class="custom-select">
								<option selected></option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>

						<div class="col-4">
							<label for="">Latitud</label>
							<input type="text" class="form-control" id="">
						</div>

						<div class="col-4">
							<label for="">Longitud</label>
							<input type="text" class="form-control" id="">
						</div>
					</div>

					<div class="form-row mb-4">
						<textarea id="textarea">

						</textarea>
					</div>
					
					<button class="btn btn-primary" type="submit">Registrar</button>

					<button class="btn btn-info">Visualitzar</button>
				</form>
			</div>

			<div class="col-6 pt-5">
				<h4 id="nomPis"></h4>
				<p id="dir"></p>
				<p id="preu"></p>
				<p id="text"></p>

			</div>
		</div>
	</div>

</body>

<script src="js/pisos.js"></script>
</html>
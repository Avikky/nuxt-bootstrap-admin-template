<template>
  <div>
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div>
          <div class="page-header mb-sm-0">
            <div class="row">
              <div class="col-sm-12">
                <h3 class="page-title">Welcome Admin!</h3>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row mb-xl-4">
            <div class="col-12 mb-2 mb-md-0">
              <div class="card card-table flex-fill">
                <div class="card-header">
                  <h3 class="card-title mb-0">Invoices</h3>
                </div>
                <div class="card-body">
                  <div>
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer">
                  <a href="#">View all invoices</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"

onMounted(() => {
  // if (window.innerWidth >= 1100)
  //   document.querySelectorAll('.page-header')[0].style.width = "1000px"
})
</script>

<style scoped></style>
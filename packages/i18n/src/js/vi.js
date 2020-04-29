(function () {
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('vi', {
        headerCell: {
          aria: {
            defaultFilterLabel: 'Bộ lọc cột',
            removeFilter: 'Xóa bộ lọc',
            columnMenuButtonLabel: 'Menu cột'
          },
          priority: 'Ưu tiên:',
          filterLabel: "Bộ lọc cột: "
        },
        aggregate: {
          label: 'Yếu tố'
        },
        groupPanel: {
          description: 'Kéo một tiêu đề cột ở đây để tạo một nhóm các cột.'
        },
        search: {
          placeholder: 'Tìm kiếm...',
          showingItems: 'Xem các mục :',
          selectedItems: 'Mục đã chọn :',
          totalItems: 'Tổng số các mục:',
          size: 'Kích thước trang:',
          first: 'Trang đầu tiên',
          next: 'Trang sau',
          previous: 'Trang trước',
          last: 'Trang cuối cùng'
        },
        menu: {
          text: 'Chọn cột :'
        },
        sort: {
          ascending: 'Sắp xếp theo thứ tự tăng dần',
          descending: 'Sắp xếp theo thứ tự giảm dần',
          none: 'Không sắp xếp',
          remove: 'Xoá sắp xếp'
        },
        column: {
          hide: 'Ẩn cột'
        },
        aggregation: {
          count: 'tổng số dòng: ',
          sum: 'tổng cộng: ',
          avg: 'trung bình: ',
          min: 'nhỏ nhất: ',
          max: 'lớn nhất: '
        },
        pinning: {
          pinLeft: 'Ghim bên trái',
          pinRight: 'Ghim bên phải',
          unpin: 'Bỏ ghim'
        },
        columnMenu: {
          close: 'Đóng'
        },
        gridMenu: {
          aria: {
            buttonLabel: 'Bản thực đơn'
          },
          columns: 'Cột:',
          importerTitle: 'Nhập từ tập tin tải lên',
          exporterAllAsCsv: 'Xuất tất cả dữ liệu sang CSV',
          exporterVisibleAsCsv: 'Xuất dữ liệu đang xem sang CSV',
          exporterSelectedAsCsv: 'Xuất dữ liệu được chọn sang CSV',
          exporterAllAsPdf: 'Xuất tất cả dữ liệu sang PDF',
          exporterVisibleAsPdf: 'Xuất dữ liệu đang xem sang PDF',
          exporterSelectedAsPdf: 'Xuất dữ liệu được chọn sang PDF',
          exporterAllAsExcel: 'Xuất tất cả dữ liệu sang Excel',
          exporterVisibleAsExcel: 'Xuất dữ liệu đang xem sang Excel',
          exporterSelectedAsExcel: 'Xuất dữ liệu được chọn sang Excel',
          clearAllFilters: 'Bỏ lọc tất cả'
        },
        importer: {
          noHeaders: 'Impossible de déterminer le nom des colonnes, le fichier possède-t-il une en-tête ?',
          noObjects: 'Aucun objet trouvé, le fichier possède-t-il des données autres que l\'en-tête ?',
          invalidCsv: 'Le fichier n\'a pas pu être traité, le CSV est-il valide ?',
          invalidJson: 'Le fichier n\'a pas pu être traité, le JSON est-il valide ?',
          jsonNotArray: 'Le fichier JSON importé doit contenir un tableau, abandon.'
        },
        pagination: {
          aria: {
            pageToFirst: 'Trang đầu',
            pageBack: 'Trang trước',
            pageSelected: 'Trang đang chọn',
            pageForward: 'Trang sau',
            pageToLast: 'Trang cuối'
          },
          sizes: 'Số mục mỗi trang',
          totalItems: 'Số mục',
          through: 'tới',
          of: 'của'
        },
        grouping: {
          group: 'Gộp',
          ungroup: 'Bỏ gộp',
          aggregate_count: 'Agg: Đếm',
          aggregate_sum: 'Agg: Tổng',
          aggregate_max: 'Agg: Max',
          aggregate_min: 'Agg: Min',
          aggregate_avg: 'Agg: Bình quân',
          aggregate_remove: 'Agg: Xoá bỏ'
        },
        validate: {
          error: 'Lỗi:',
          minLength: 'Giá trị phải lớn hơn hoặc bằng THRESHOLD ký tự.',
          maxLength: 'Giá trị phải lớn hơn hoặc bằng THRESHOLD ký tự.',
          required: 'Giá trị là bắt buộc.'
        }
      });
      return $delegate;
    }]);
  }]);
})();

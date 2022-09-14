		$(function () {
			// Loading
			var bins = JSON.parse(localStorage.getItem("bins") || "[]");
			recentbins = "";
			for (const bin of bins) {
				strTime = new Date(bin["createdTime"]);
				strTime = strTime.toISOString();
				recentbins = recentbins + `<li class=\"list-group-item-home\"><div class=\"row\"><div class=\"col-7\"><i class=\"fa-solid fa-angle-right pr-1\"></i><a href=\"/bins/view/${bin["binKey"]}\">${bin["binKey"]}</a></div><div class=\"col-5\"><i class=\"fa-solid fa-calendar-plus pr-1\"></i>${strTime}</div></div></li>`;
			}

			$('#recentBins').html(recentbins)
		})

		function createBin() {
      		$("#btncreate").hide();
			$("#btncreateloading").show();
			$.ajax({'url': '/bins/new', 'type': 'POST', 
			'data': {'csrfmiddlewaretoken': $('input[name="csrfmiddlewaretoken"]').val()},
			'success': function(data) {
				addtoListBins(data['binKey']);
				window.location.href = "/bins/view/"+data['binKey'];
			}
			});
		}

		function addtoListBins(newBin) {
			// Loading
			var bins = JSON.parse(localStorage.getItem("bins") || "[]");
			// Modifying
			var bin = {
				binKey: newBin,
				createdTime: Date.now()
			};
			bins.push(bin);
			// Saving
			localStorage.setItem("bins", JSON.stringify(bins));
		}
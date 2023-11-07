import ProductsCarousel from '@components/product/products-carousel';
import {useBestSellerProductsQuery} from '@framework/product/get-all-best-seller-products';
import {LIMITS} from '@framework/utils/limits';
import {ROUTES} from '@utils/routes';
import {useEffect, useState} from "react";
import {API_ENDPOINTS} from "@framework/utils/api-endpoints";
import {IsEditable, onlyForBuilder} from "@components/config";

const BestSellerProductFeed = ({limit, idFilter}) => {

	console.log('BestSellerProductFeedProps ', {limit, idFilter})


	useEffect(() => {
		console.log('render')
	}, []);


	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await fetch(`/api${API_ENDPOINTS.BEST_SELLER_PRODUCTS}?limit=${limit}&id=${idFilter}`);

			if (!response.ok) {
				throw new Error('Failed to fetch best seller products');
			}

			const data = await response.json();
			setData(data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData().then();
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (onlyForBuilder()) {
		return (
			<div data-component="BestSellerProductFeed">
				<div style={{pointerEvents: "none"}}>limit: </div>
				<p {...IsEditable({limit: "textContent"})}>10</p>
				<div style={{pointerEvents: "none"}}>Category:</div>
				<p {...IsEditable({idFilter: "textContent"})}>pbs1</p>
			</div>
		)
	}

	// const { data, isLoading, error } = useBestSellerProductsQuery({
	//   limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS,
	//   id: 'pbs1',
	// });

	console.log(data)

	return (
		<div data-component={"BestSellerProductFeed"}>
			<ProductsCarousel
			  sectionHeading="text-best-sellers"
			  categorySlug={ROUTES.PRODUCTS}
			  products={data}
			  loading={isLoading}
			  error={error?.message}
			  limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
			  uniqueKey="best-sellers"
			  className = "mb-8"
			/>
		</div>
	);
}

export default BestSellerProductFeed;
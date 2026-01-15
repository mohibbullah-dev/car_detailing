import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getPortfolioApi,
  createPortfolioApi,
  deletePortfolioApi,
  updatePortfolioApi,
} from "../api/portfolio.api";

const keys = {
  list: ["portfolio"],
};

export function usePortfolioList() {
  return useQuery({
    queryKey: keys.list,
    queryFn: getPortfolioApi,
    staleTime: 60 * 1000,
  });
}

export function useCreatePortfolio() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createPortfolioApi,
    onSuccess: () => qc.invalidateQueries({ queryKey: keys.list }),
  });
}

export function useDeletePortfolio() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deletePortfolioApi,
    onSuccess: () => qc.invalidateQueries({ queryKey: keys.list }),
  });
}

export function useUpdatePortfolio() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => updatePortfolioApi(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: keys.list }),
  });
}

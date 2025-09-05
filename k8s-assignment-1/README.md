This assignment demonstrates key Kubernetes concepts including Deployments, Services, Scaling, Exec & Logs, StatefulSets, Secrets/ConfigMaps, and Ingress using Minikube.

Commands used:
kubectl apply -f statefulset.yaml
kubectl apply -f service.yaml
kubectl apply -f env-deployment.yaml
kubectl apply -f deployment.yaml
kubectl apply -f json-config-deployment.yaml
kubectl apply -f ingress.yaml
kubectl get pods
kubectl get svc
kubectl get pvc
kubectl get ingress
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- /bin/bash